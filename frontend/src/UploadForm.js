import axios from 'axios';
import React, {useState} from 'react';

export default function UploadForm() {
	const [selectedFile, setSelectedFile] = useState();
	const [isSelected, setIsSelected] = useState(false);

	function handleFileChange(event) {
		setSelectedFile(event.target.files[0]);
		setIsSelected(true);
	};

	async function handleFileSubmit() {
		const form = new FormData();
		form.append('file', selectedFile);

        const response = await axios.post("url", form, {
            headers: {
                ...form.getHeaders()
            },
        });
	};

	return(
        <div>
			<input type="file" name="file" onChange={handleFileChange} />
			{isSelected ? (
				<div>
					<p>Filename: {selectedFile.name}</p>
					<p>Filetype: {selectedFile.type}</p>
					<p>Size in bytes: {selectedFile.size}</p>
					<p>
						lastModifiedDate:{' '}
						{selectedFile.lastModifiedDate.toLocaleDateString()}
					</p>
				</div>
			) : (
				<p>Select a file to show details</p>
			)}
			<div>
				<button onClick={handleFileSubmit}>Submit</button>
			</div>
		</div>
	)
}