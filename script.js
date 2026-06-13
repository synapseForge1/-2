body {
    font-family: 'Press Start 2P', cursive;
    background: linear-gradient(rgba(0,0,0, 0.6), rgba(0,0,0, 0.6)), 
                url('https://images.unsplash.com/photo-1627856013091-fed6e4e30025?q=80&w=1920&auto=format&fit=crop');
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    color: #fff;
}

.app-container {
    width: 500px;
    background: #212121;
    padding: 30px;
    border: 4px solid #4caf50;
    border-radius: 10px;
    text-align: center;
}

.hide { display: none; }

.answer-btn, #start-btn, #restart-btn {
    padding: 15px;
    border: none;
    border-radius: 5px;
    background: #4caf50;
    color: white;
    font-family: 'Press Start 2P', cursive;
    font-size: 12px;
    cursor: pointer;
    transition: 0.3s;
    width: 100%;
    margin-top: 10px;
}

.answer-btn:hover, #start-btn:hover, #restart-btn:hover {
    background: #388e3c;
    transform: scale(1.05);
}

.correct { background: #2e7d32 !important; }
.wrong { background: #c62828 !important; }
