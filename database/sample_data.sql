USE OrganicFarm;

INSERT INTO farm_contact_info VALUES ('4c74bc07-2d2d-4efa-9f8d-0ab7144a453d', 'Test addr', '(123)456-7890', 'test@email.com');
INSERT INTO farm_contact_info VALUES ('7bec1960-b735-46b1-80e6-ecd531382a04', 'Test addr2', '(987)654-3210', 'test2@email.com');

INSERT INTO farm VALUES ('5783fe26-1260-4bd6-806b-400017e25668', 'Farm', 'TestImage', '4c74bc07-2d2d-4efa-9f8d-0ab7144a453d');
INSERT INTO farm VALUES ('321447bf-07c5-4210-a6ba-9fa83306738a', 'Farm2', 'TestImage2', '7bec1960-b735-46b1-80e6-ecd531382a04');
INSERT INTO farm VALUES ('d0a2e849-e22e-40bd-bdea-476b554659b3', 'Farm3', 'TestImage3', NULL);
