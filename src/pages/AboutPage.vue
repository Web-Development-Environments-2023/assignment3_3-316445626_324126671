<template>
    <div class="about-container">
      <div class="about-header">
        <h1>Welcome</h1>
        <p>We are Abed and Ariel, third-year students studying Software and Information Systems Engineering.</p>
      </div>
  
      <div class="about-section">
        <h3>Tasty Recipes</h3>
        <p>
          Foodie Recipes is a platform where you can discover and explore various recipes. We source our recipes from an
          external API called Spoonacular.
        </p>
        <p>
          Whether you are a registered user or a guest, you can search for recipes and apply various filters. Registered
          users have additional features such as creating personal recipes, saving favorites, and viewing personal and
          family recipes.
        </p>
        <p>Each recipe on our site is labeled with dietary information, including options for vegan, vegetarian, and gluten-free diets.</p>
        <p>We hope you enjoy using Foodie Recipes!</p>
      </div>
  
      <div class="about-section">
        <h3>Space Invaders</h3>
        <p>
          In our previous project, we developed a fun and exciting game called Space Invaders. Feel free to check it out!
        </p>
        <a class="space-invaders-link" href="https://web-development-environments-2023.github.io/assignment2-207511759_206989527/" target="_blank">Play Space Invaders Game</a>
      </div>
  
      <div class="about-section">
        <h3>Personal Websites</h3>
        <p>
          Apart from our collaboration on Tasty Recipes, we have each created individual websites, showcasing our unique styles and creativity.
        </p>
        <p>Abed's Website: <a href="https://web-development-environments-2023.github.io/316445626/" target="_blank">Visit Abed's Site</a></p>
        <p>Ariel's Website: <a href="https://web-development-environments-2023.github.io/324126671/" target="_blank">Visit Ariel's Site</a></p>
      </div>
  
      <div class="about-section">
        <h3>Contact Us</h3>
        <p>Abed: <a href="mailto:awaisya@post.bgu.ac.il">awaisya@post.bgu.ac.il</a></p>
        <p>Ariel: <a href="mailto:Pichadze@post.bgu.ac.il">Pichadze@post.bgu.ac.il</a></p>
      </div>
    </div>
  </template>
  
  <style>
    .about-container {
      max-width: 80%;
      margin: 0 auto;
      padding: 4vh;
      background-color: #f7ede1;
      font-family: Arial, sans-serif;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
  
    .about-header {
      margin-bottom: 30px;
      color: #e09335;
      text-shadow: 2px 2px 4px rgba(87, 46, 10, 0.3);
    }
  
    .about-section {
      margin-bottom: 30px;
    }
  
    .about-section h3 {
      color: #e09335;
      margin-bottom: 10px;
    }
  
    .about-section p {
      line-height: 1.6;
    }
  
    .space-invaders-link {
      color: #b36923;
      text-decoration: none;
      transition: color 0.3s;
    }
  
    .space-invaders-link:hover {
      color: #ffa62f;
      text-decoration: underline;
    }
  
    a {
      color: #b36923;
      text-decoration: none;
      transition: color 0.3s;
    }
  
    a:hover {
      color: #ffa62f;
      text-decoration: underline;
    }
  </style>
  