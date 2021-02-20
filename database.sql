CREATE TABLE "images" (
  "id" SERIAL PRIMARY KEY,
  "path" VARCHAR(2083) NOT NULL,
  "description" VARCHAR(100),
  "likes" FLOAT DEFAULT 0
);

INSERT INTO "images" ("path", "description")
VALUES 
('images/best_girl.jpg', 'Willow in her favorite field'),
('images/boom_island.jpg', 'Boom island lighthouse at dusk'),
('images/nelson.jpg', 'Garbage kitty'),
('images/mill_city.jpg', 'Mill City Museum by the Stone Arch Bridge. One of my favorite buildings in MPLS'),
('images/north_woods.jpg', 'Photo of a goat taken at Glacier National Park.');