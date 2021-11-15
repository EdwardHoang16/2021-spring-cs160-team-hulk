package com.hulk.organicfarm.models;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.util.UUID;

@RequiredArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity(name = "Product")
@Table(name = "product")
public class Product {
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "uuid2")
    @Column(name = "id")
    private UUID id;

    @NonNull
    @Column(name = "product_name")
    private String productName;

    @NonNull
    @Column(name = "img_url")
    private String imgUrl;

    @NonNull
    @Column(name = "price")
    private double price;

    @NonNull
    @Column(name = "quantity")
    private int quantity;

    @ManyToOne(
            cascade = CascadeType.ALL
    )
    @JoinColumn(
            name = "farm_id",
            referencedColumnName = "id"
    )
    private Farm farm;
}
