        // Create a card element
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">Welcome to my portfolio hub</h5>
            </div>
        `;

        // Position the card in the center of the screen
        card.style.position = 'fixed';
        card.style.top = '50%';
        card.style.left = '50%';
        card.style.transform = 'translate(-50%, -50%)';

        // Append the card to the body
        document.body.appendChild(card);