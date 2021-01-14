-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

-- database name: react_shopping_list

CREATE TABLE shopping_list (
	"id" SERIAL PRIMARY KEY,
	"item_name" VARCHAR(80) NOT NULL,
	"quantity" REAL NOT NULL,
	"unit" VARCHAR(20),
	"purchased" BOOLEAN DEFAULT FALSE
);

INSERT INTO "shopping_list" ("item_name", "quantity", "unit")
VALUES ('Bananas', 2, 'bunches'),
('Ribeye Steak', 1.5, 'kilograms'),
('Maple Syrup', 1, 'jug'); 