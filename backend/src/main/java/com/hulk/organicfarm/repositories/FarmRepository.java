package com.hulk.organicfarm.repositories;

import com.hulk.organicfarm.models.Farm;
import org.springframework.stereotype.Repository;

import java.util.Arrays;
import java.util.List;
import java.util.UUID;

@Repository
public class FarmRepository {
    private List<Farm> farms;

    public FarmRepository() {
        this.farms = Arrays.asList(
                new Farm(UUID.randomUUID(), "Walmart", "....", "http//walmart.com"),
                new Farm(UUID.randomUUID(), "Amazon", "....","http//amazon.com"),
                new Farm(UUID.randomUUID(), "Instacart", "....","http//instacart.com")
            );
    }

    public List<Farm> getStores(){
        return this.farms;
    }
}
