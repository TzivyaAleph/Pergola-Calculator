function regularCalculator() {
    const length = document.getElementById('inputLength').value;
    const width = document.getElementById('inputWidth').value;
    const height = document.getElementById('inputHeight').value;
    const incline = document.getElementById('inputIncline').value;
    const output = document.getElementById('inputOutput').value;
    const thickness = document.getElementById('thickness').value;
    const beamHight = document.getElementById('beamHight').value;

    //שיהיה אפשרות להוריד בכלל קורת קיר- אופציה אם אתה רוצה או לא
    //קורה תומכת- ברירת מחדל כמו כל הקרשים והאופציה לשנות גם עובי וגם גובה
    let wallBeam = document.getElementById('showNumberInput');
    let wallBeamVal= 0;

    wallBeam.addEventListener('change', function() {
            if (wallBeam.checked) {
                wallBeamVal = 5;
            } else {
                wallBeamVal = 0; // Add this line if you want to reset wallBeamVal when unchecked
            }
            console.log('wallBeamVal:', wallBeamVal); // For debugging purposes
        });

    let supportBeamCheckBox = document.getElementById('supportBeam');
    const hightSupportBeam = document.getElementById('hightSupportBeam');
    const thicknessSupportBeam = document.getElementById('thicknessSupportBeam');

    supportBeam.addEventListener('change', function() {
        if (supportBeamCheckBox.checked == true) 
            {hightSupportBeam.style.display="block"; 
            thicknessSupportBeam.style.display="block"; }
        else{hightSupportBeam.style.display="none"; 
            thicknessSupportBeam.style.display="none";
            hightSupportBeam.value = beamHight;
            thicknessSupportBeam.value = thickness;
        } 
    });
    console.log('wallBeamVal:', wallBeamVal); // For debugging purposes
    let variables = [length,width,height,incline,output,thickness,beamHight,wallBeamVal,hightSupportBeam.value,thicknessSupportBeam.value];

    // the url is the address to where i want to send the http request
    fetch('http://127.0.0.1:3000/calculate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ variables })
    })
    .then(response => response.json())
    .then(data => {
        //const result = [space,beams,lengthOfWood,poleHeight,spaceBetweenPoles,poles];
        document.getElementById('result').innerText = `Space between beams : ${data.result[0]}\n Amount of beams: ${data.result[1]}\n Length of beam: ${data.result[2]}
        The height of the pole: ${data.result[3]}\n The space between the poles: ${data.result[4]}\n Amount of poles: ${data.result[5]} `;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
