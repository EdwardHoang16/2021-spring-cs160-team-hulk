package com.hulk.organicfarm.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
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

@Entity(name= "Farm")
@Table(
        name= "farm"
)

@NoArgsConstructor
@Setter
@Getter
@AllArgsConstructor
@ToString
public class Farm {
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "uuid2")
    @Column(name = "id")
    private String id;

    @Column(name = "farm_name", nullable = false)
    private String farmName;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "img_url", nullable = false)
    private String imgUrl;

    @Column(name = "address", nullable = false)
    private String address;

    @Column(name = "contact", nullable=false)
    private String contact;

    @ManyToOne(
            cascade = CascadeType.ALL
    )
    @JoinColumn(
            name = "email",
            referencedColumnName = "email"
    )
    private UserCredentials userCredentials;

    public Farm(String farmName, String description, String imgUrl, String address, String contact) {
        this.farmName = farmName;
        this.description = description;
        this.imgUrl = imgUrl;
        this.address = address;
        this.contact = contact;
    }
}
