function generateCard(data) {
    let cardsHTML = "";
    console.log(data)
    data.forEach((card) => {
        let classCard;
        if (card.type == "Manager") {
            classCard = "managerCard";
        }
        if (card.type == "Engineer") {
            classCard = "engineerCard";
        }
        if (card.type == "Intern") {
            classCard = "internCard";
        }
        const cardHTML = `
            
                <div class="card ${classCard}">
                    <div class="cardHeader">${card.name}</div>
                    <div class="cardLine">${card.type}</div>
                    <div class="cardLine">${card.id}</div>
                    <div class="cardLine">${card.email}</div>
                    <div class="cardLine">${card.officeNumber}</div>
                </div>
            
        `;
        cardsHTML = cardsHTML + cardHTML;
    });

    return cardsHTML;
};

function generateHTML(data) {
    const cards = generateCard(data);
    return `
        <!DOCTYPE HTML>
        <html>
        <head>
            <title>!DOCTYPE</title>
            <meta charset="utf-8">
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&family=Vast+Shadow&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="../css/style.css">
        </head>
        
        <body>
            <header class="header">
                <div class="headerLogo"></div>
                <div class="headerLogoConteiner">
                    <h1 class="headerTitle">My Team</h1>
                </div>
            </header>
        
            <main class="main">
                <div class="cardConteiner">
                ${cards}
                </div>
            </main>
        </body> 
        </html>
    `;
};

module.exports = generateHTML;