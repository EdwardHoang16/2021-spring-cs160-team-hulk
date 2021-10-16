USE OrganicFarm;

CREATE TABLE IF NOT EXISTS farm_contact_info (
  id UUID,
  address VARCHAR(255) NOT NULL,
  phone_number VARCHAR (255) NOT NULL,
  email VARCHAR (255) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (email) REFERENCES user_credentials(email)
);

CREATE TABLE IF NOT EXISTS farm (
  id UUID,
  farm_name VARCHAR (255) NOT NULL,
  img_url VARCHAR (255) NOT NULL,
  contact_id CHAR(36) UNIQUE,
  PRIMARY KEY (id),
  FOREIGN KEY (contact_id)  REFERENCES farm_contact_info(id)
);

CREATE TABLE IF NOT EXISTS user_credentials (
  email VARCHAR (255) NOT NULL, 
  salt VARCHAR (255) NOT NULL,
  password VARCHAR (255) NOT NULL,
  PRIMARY KEY (email)
);
