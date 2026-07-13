# Palm-Motta/
│
├── index.html<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>PALM MOTTA // CEO MODE</title>

<link rel="stylesheet" href="style.css">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Space+Grotesk:wght@400;700&display=swap" rel="stylesheet">

</head>

<body>

<header>

<div class="logo">

0010110

</div>

<nav>

<a href="#about">About</a>
<a href="#gallery">Gallery</a>
<a href="#contact">Contact</a>

</nav>

</header>

<section class="hero">

<h1>PALM MOTTA</h1>

<h2>CEO MODE</h2>

<p>
Hand-designed wearable artwork.
Built after hours.
Made with intention.
</p>

<a href="#gallery" class="button">View Collection</a>

</section>

<section id="about">

<h3>Mission</h3>

<p>

Palm Motta exists to create original wearable artwork that represents discipline,
ownership, and creative freedom.

Every piece begins by hand.

No shortcuts.

No mass production.

</p>

</section>

<section id="gallery">

<h3>Current Collection</h3>

<div class="card">

<h4>INTERFACE_001</h4>

<p>SOLD</p>

</div>

<div class="card">

<h4>INTERFACE_002</h4>

<p>IN PROGRESS</p>

</div>

<div class="card">

<h4>INTERFACE_003</h4>

<p>COMING SOON</p>

</div>

</section>

<section id="contact">

<h3>Commission a Piece</h3>

<p>
Interested in an original Palm Motta design?
Reach out on Instagram.
</p>

</section>

<footer>

0010110 // PALM MOTTA CEO MODE

</footer>

<script src="script.js"></script>

</body>

</html>

├── style.css*{
margin:0;
padding:0;
box-sizing:border-box;
}

body{

background:#090909;

color:white;

font-family:Inter,sans-serif;

}

header{

display:flex;

justify-content:space-between;

padding:25px 10%;

}

.logo{

font-family:"Space Grotesk";

font-size:20px;

letter-spacing:4px;

}

nav a{

color:white;

text-decoration:none;

margin-left:25px;

opacity:.7;

transition:.3s;

}

nav a:hover{

opacity:1;

}

.hero{

height:90vh;

display:flex;

flex-direction:column;

justify-content:center;

align-items:center;

text-align:center;

padding:20px;

}

.hero h1{

font-size:72px;

font-family:"Space Grotesk";

letter-spacing:8px;

}

.hero h2{

margin-top:10px;

font-weight:300;

letter-spacing:6px;

color:#999;

}

.hero p{

margin:30px 0;

max-width:600px;

line-height:1.8;

}

.button{

padding:16px 32px;

background:white;

color:black;

text-decoration:none;

font-weight:700;

transition:.3s;

}

.button:hover{

background:#3b82f6;

color:white;

}

section{

padding:100px 10%;

}

.card{

border:1px solid #333;

padding:40px;

margin-top:20px;

transition:.3s;

}

.card:hover{

transform:translateY(-5px);

border-color:#3b82f6;

}

footer{

padding:40px;

text-align:center;

color:#777;

}

├── script.jsconsole.log("CEO MODE Activated");

└── README.md
