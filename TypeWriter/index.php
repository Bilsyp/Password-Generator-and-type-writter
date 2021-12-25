<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" href="../../Framework/fontawesome/css/all.css">
    <link rel="stylesheet" href="../../Framework/bootstrap/css/bootstrap.css">
    <link rel="stylesheet" href="css/style.css">

</head>
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: Arial, Helvetica, sans-serif;
        background: url("../../img/city.jpg") center center/cover no-repeat;
        height: 100vh;
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .content h1 {
        font-size: 3rem;
        font-weight: 200;
        color: wheat;
    }

    .sosial-media {
        position: absolute;
        bottom: 5%;

    }
</style>

<body>
    <!-- 
    <h1 class="text-center text-light mt-5 fw-bold">Hello World</h1> -->
    <div class="container">
        <div class="content">
            <h1>Bilsyp The
                <span id="txt-type" data-wait="3000" data-words='["Junior Developer","Student","Amatir"]'></span>
            </h1>
            <p class="lead text-light mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur laboriosam ipsum molestiae suscipit, beatae fugit est. Voluptate eligendi explicabo error.</p>

            <h3 class="mt-5 text-light">Welcome To My Website.</h3>
        </div>
    </div>
    <div class="sosial-media">
        <ul>
            <li><a class="text-light text-decoration-none" href=""><i class="fab fa-github fa-3x"></i> <span>Report a Bug</span></a> </li>

        </ul>
    </div>

    <script src="../../Framework/fontawesome/js/all.js"></script>
    <script src="../../Framework/bootstrap/js/bootstrap.js"></script>
    <script src="js/app.js"></script>
    <script>
        const TypeWritter = function(txtElement, words, wait = 3000) {
            this.txtElement = txtElement;
            this.words = words;
            this.txt = '';
            this.wordIndex = 0;
            this.wait = parseInt(wait, 10);
            this.type();
            this.isDeleting = false;
        }
        //    Type Method
        TypeWritter.prototype.type = function() {
            // Current index  of word
            const current = this.wordIndex % this.words.length;

            // Get full text pf current word
            const fulltxt = this.words[current]
            // Check if deleting
            if (this.isDeleting) {
                // remove char
                this.txt = fulltxt.substring(0, this.txt.length - 1);
            } else {
                // Add char 
                this.txt = fulltxt.substring(0, this.txt.length + 1);
                // console.log(this.txt)
            }
            // Insert txt into element 
            this.txtElement.innerHTML = `<span>${this.txt}</span>`;

            // Type Speed
            let typeSpeed = 300;

            if (this.isDeleting) {
                typeSpeed /= 2;


            }

            // If word is complete
            if (!this.isDeleting && this.txt === fulltxt) {
                // Make pause at end

                typeSpeed = this.wait;

                // Set delete to true
                this.isDeleting = true


            } else if (this.isDeleting && this.txt === '') {
                this.isDeleting = false;

                // Move next word 
                this.wordIndex++;
                // Pause before start typing

                typeSpeed = 500
            }



            setTimeout(() => this.type(), typeSpeed)

        }
        // Init on Dom Load
        document.addEventListener("DOMContentLoaded", init)

        function init() {
            const txtElement = document.querySelector("#txt-type");
            const words = JSON.parse(txtElement.getAttribute("data-words"));
            const wait = txtElement.getAttribute("data-wait")
            // Init TypeWriter
            const i = new TypeWritter(txtElement, words, wait)
            console.log(words)
        }
    </script>
</body>

</html>