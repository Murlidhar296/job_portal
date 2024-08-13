var app = document.getElementById('app')

var typewriter = new Typewriter(app, {
    loop: true,
});

typewriter.typeString('fbnaukri.com')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Find your job')  
    .pauseFor(2500)
    .deleteAll()
    .typeString('fbnaukri.com')
    .pauseFor(2500)
    .start()
    .toLowerCase();

    
    const job_category = document.getElementById('filter-jobs');
    const checkbox = document.querySelectorAll('.checkmark');
    const sectionSelect = document.querySelectorAll('.single-job-items');


    job_category.addEventListener('click', () => {
        alert("Hello Champ")
    });

    sectionSelect.forEach((item) => {
        item.addEventListener('click' ,() => {
            if(item[2].selected){
                checkbox[3].checked;
            }
        })
    })




