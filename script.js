    //The idea here is I want a user to type in an input (as the javascript portion) to look for what they want. 
    
    let inputField = document.getElementById('inputField');
    let resume = document.getElementById('resume');
    let html = document.getElementById('html');
    let cheatsheet = document.getElementById('cheatSheet');
    let javascript = document.getElementById('javascript');

    inputField.addEventListener('submit', function(event) {
        event.preventDefault();

        let input = document.getElementById('search').value.trim();
        console.log(input);

        let inputLower = input.toLowerCase(); //Helps reduce chance of error and weird behaviour. Its just easier.
        console.log(inputLower);

        if(inputLower === 'resume') 
        {
            resume.style.display = 'block';
            cheatsheet.style.display = 'none'; 
        }

        if(inputLower === 'cheatsheet' || inputLower === 'cheat sheet') //when I go back to this to improve on I'm going to brute force take individual letters and concat them together so any number of weird ways to type the keywords will work. 
        {
            cheatsheet.style.display = 'inline-block';
            resume.style.display = 'none';
        }

        if(inputLower === 'html')
        {
            html.style.display = 'block';
            javascript.style.display = 'none';
        }

        if (inputLower === 'javascript' || inputLower === 'java script')
        {
            html.style.display = 'none';
            javascript.style.display = 'block';
        }
});

//Im taking a little bit of a risk not creating 3 seperate pages in order to do something a little creative. I made 2 pages to demonstrate I know how too and I hope thats enough.
//I'm not sure why but towards the end of the term my reading comprhesion has become nonexistent.
//I was originally also going to include my Connect 3 game with all the optimizations/patches I had done since I submitted it, but I was worried it'd be considered resubmission of previous work for a new assignment so I decided against it.
//Here it is the FINAL ASSIGNMENT. Was relatively easy because I could just use my own knowledge and I got to be a little more creative. Thanks again for teaching our class!
