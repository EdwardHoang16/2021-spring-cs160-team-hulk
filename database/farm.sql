CREATE TABLE IF NOT EXISTS user_credentials (
  email VARCHAR (255) NOT NULL, 
  salt VARCHAR (255) NOT NULL,
  password VARCHAR (255) NOT NULL,
  PRIMARY KEY (email)
);

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
  description TEXT NOT NULL,
  img_url TEXT NOT NULL,
  address VARCHAR (255) NOT NULL,
  user_email VARCHAR (255) NOT NULL,
  contact VARCHAR (255) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_email)  REFERENCES user_credentials(email)
);

