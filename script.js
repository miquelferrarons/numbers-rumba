<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Colors Rumba</title>
    <style>
        .combination {
            display: flex;
            justify-content: space-around;
            margin-top: 20px;
        }

        .column {
            display: flex;
            flex-direction: column;
        }

        .cube {
            width: 50px;
            height: 50px;
            border: 1px solid #000;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 5px;
        }
    </style>
</head>
<body>
    <button onclick="generateCombination()">Generate Random Combination</button>
    <button onclick="shuffleCombination()">Shuffle</button>

    <div class="combination" id="combination"></div>

    <script>
        const uniqueCubes = [
            '1 red', '2 red', '3 red',
            '1 blue', '2 blue', '3 blue',
            '1 white', '2 white', '3 white'
        ];

        let currentCombination = [];

        function generateCombination() {
            const combinationDiv = document.getElementById('combination');
            combinationDiv.innerHTML = '';

            currentCombination = uniqueCubes.slice();
            shuffleArray(currentCombination);

            for (let i = 0; i < 3; i++) {
                const columnDiv = document.createElement('div');
                columnDiv.className = 'column';

                for (let j = 0; j < 3; j++) {
                    const cube = document.createElement('div');
                    cube.className = 'cube';

                    const currentCube = currentCombination[i * 3 + j].split(' ');
                    cube.style.backgroundColor = currentCube[1].toLowerCase();
                    cube.innerText = currentCube[0];

                    columnDiv.appendChild(cube);
                }

                combinationDiv.appendChild(columnDiv);
            }
        }

        function shuffleCombination() {
            const shuffledCubes = uniqueCubes.slice();
            shuffleArray(shuffledCubes);

            currentCombination = [];

            while (shuffledCubes.length > 0) {
                const randomIndex = Math.floor(Math.random() * currentCombination.length + 1);
                currentCombination.splice(randomIndex, 0, shuffledCubes.pop());
            }

            generateCombination();
        }

        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        // Initial combination generation on page load
        generateCombination();
    </script>
</body>
</html>
