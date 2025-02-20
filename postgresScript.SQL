-- Scripts ran in postgres to import animals.json data

-- Script to create a new table 
CREATE TABLE animals (
    common_name VARCHAR(255),
    scientific_name VARCHAR(255),
    lifespan INT,
    habitat VARCHAR(255),
    diet VARCHAR(255)
);

-- Script to add animals data to the animals table
INSERT INTO animals (common_name, scientific_name, lifespan, habitat, diet) 
VALUES 
    ('Emerald green tree boa', 'Boa caninus', 76, 'savannah', 'carnivore'),
    ('Ostrich', 'Struthio camelus', 83, 'savannah', 'carnivore'),
    ('Jaguar', 'Panthera onca', 28, 'tundra', 'herbivore'),
    ('Tortoise, desert', 'Gopherus agassizii', 64, 'desert', 'herbivore');

