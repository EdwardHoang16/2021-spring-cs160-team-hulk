package com.hulk.organicfarm.services;

import org.springframework.web.multipart.MultipartFile;
import org.springframework.core.io.Resource;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;

import java.awt.image.BufferedImage;
import java.awt.Image;
import java.awt.Color;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

import javax.imageio.ImageIO;

import org.springframework.stereotype.Service;

@Service
public class StorageService {

    @Value("${user-images.path}")
    private String path;

    private static class Resolution {
        private double width, height;
        private double ratio;

        Resolution(int w, int h, int mw, int mh) {
            width = w;
            height = h;
            ratio = Math.max(1.0, Math.max(width / mw, height / mh));
        }

        public int getWidth() {
            return (int) (width / ratio);
        }

        public int getHeight() {
            return (int) (height / ratio);
        }
    }

    // reference: https://stackoverflow.com/questions/62800886/how-to-convert-any-image-to-jpg
    private boolean convertToJPEG(MultipartFile attachedFile, OutputStream output, int maxWidth, int maxHeight) {
        try {
            InputStream istream = attachedFile.getInputStream();
            BufferedImage image = ImageIO.read(istream);
            istream.close();

            Resolution res = new Resolution(image.getWidth(), image.getHeight(), maxWidth, maxHeight);

            Image scaled = image.getScaledInstance(res.getWidth(), res.getHeight(), BufferedImage.SCALE_SMOOTH);

            BufferedImage converted = new BufferedImage(res.getWidth(), res.getHeight(), BufferedImage.TYPE_INT_RGB);
            converted.createGraphics().drawImage(scaled, 0, 0, Color.WHITE, null);
            boolean wrote = ImageIO.write(converted, "jpg", output);
            output.close();
            return wrote;
        } catch(IOException e) {
            return false;
        }
    }

    /**
     * Store image file into disk. Respects provided width and height. It will maintain the original aspect ratio.
     * @param file The file object provided by Spring framework
     * @param width max width
     * @param height max height
     * @return file name
     */
    public String store(MultipartFile file, int width, int height) {
        Path root = Paths.get(path);
        
        if (! Files.exists(root))
            return null;

        String filename;
        Path filepath;
        do {
            UUID uuid = UUID.randomUUID();
            filename = uuid + ".jpg";
            filepath = root.resolve(filename);
        } while (Files.exists(filepath));

        OutputStream out;
        try {
            out = new FileOutputStream(filepath.toFile());
        } catch(FileNotFoundException e) {
            return null;
        }
        if (! convertToJPEG(file, out, width, height))
            return null;
        return filename;
    }

    public Resource loadAsResource(String filename) {
        Path root = Paths.get(path), filepath = root.resolve(filename);
        if (! Files.exists(filepath))
            return null;
        return new FileSystemResource(filepath);
    }
}
