const date = new Date();

let course = {
    "link" : window.location.href,
    "date" : date.toLocaleDateString(),
    "title" : document.querySelector('[data-e2e="hero-title"]').innerText,
    "subheading" : -1,
    "ratingPercentage" : -1, 
    "rating": document.querySelector('[data-e2e="key-information"]').childNodes[0].childNodes[0].childNodes[0].childNodes[2].childNodes[0].childNodes[0].innerText,
    "ratingCount": -1,
    "enrolledCount" : -1, 
    "recentViews": -1, //Find (Couldn't find)
    "instructorRatingCount": -1,
    "instructorRating": -1,
    "reviewCount": -1, //Find (On the Other Page)
    "reviewRating": -1,
    "aboutThisCourse": document.querySelector('[id="modules"]').childNodes[0].childNodes[0].childNodes[0].innerText,
    "contentRating": -1, //Find (Couldn't Find)
    "contentRatingCount": -1, //Find (Couldn't Find)
    "syllabus": [], //Different from version A
    "partners": [],
    "whatYouWillLearn": [],
    "skills": [],
    "productGlance": [], //Different from version A
    "instructors": [],
    "reviewStarPercentage": [],
    "learnerCareerOutcomes": [], 
    //New Info that was not on Version A
    "detailsToKnow": [],
    "courseraPlus": false
}   

//Subheading
try{
    course.subheading = document.querySelector('[data-e2e="hero-module"]').childNodes[2].innerText
}catch(e){}

//Enrolled Count
try{
    course.enrolledCount = document.querySelector('[data-e2e="hero-module"]').childNodes[5].childNodes[0].childNodes[0].childNodes[0].innerText
}catch(e){}
//Rating Count
try{
    course.ratingCount = document.querySelector('[data-e2e="key-information"]').childNodes[0].childNodes[0].childNodes[0].childNodes[2].childNodes[0].childNodes[2].innerText
}catch(e){}

//Review Rating
try{
    course.reviewRating = document.querySelector('[data-track-component="reviews_module"]').childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[1].innerText
}catch(e){}
//Instructor Rating Count
try{
    course.instructorRatingCount = document.querySelector('[id="modules"]').childNodes[0].childNodes[0].childNodes[2].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[1].childNodes[1].innerText
}catch(e){}
//Instructor Rating
try{
    course.instructorRating = document.querySelector('[id="modules"]').childNodes[0].childNodes[0].childNodes[2].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[0].innerText
}catch(e){}
//CourseraPlus
try
{
    if(document.querySelector('[data-e2e="hero-coursera-plus-cta"]').childNodes[0].childNodes[0].innerText.includes("Included with"))
        course.courseraPlus = true
}catch(e){}
//Rating Percentage
try
{
    course.ratingPercentage = document.querySelector('[data-e2e="key-information"]').childNodes[0].childNodes[0].childNodes[0].childNodes[2].childNodes[0].childNodes[5].innerText
}catch(e){}

//About section (What you'll learn, Skills you'll Gain, Details to Know)
for(var i = 0; i < document.querySelector('[id="about"]').childNodes.length; i++)
{
    if(document.querySelector('[id="about"]').childNodes[i].childNodes[0].childNodes[0].innerText.includes("What you'll learn"))
    {
        try{
            for(var j = 0; j < document.querySelector('[id="about"]').childNodes[i].childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes.length; j++)
                course.whatYouWillLearn.push(document.querySelector('[id="about"]').childNodes[i].childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[j].innerText);
            }catch(e){}
    }
    else if(document.querySelector('[id="about"]').childNodes[i].childNodes[0].childNodes[0].innerText.includes("Skills you'll gain"))
    {
        try{
            for(j = 0; j < document.querySelector('[id="about"]').childNodes[i].childNodes[0].childNodes[1].childNodes.length; j++)
                course.skills.push(document.querySelector('[id="about"]').childNodes[i].childNodes[0].childNodes[1].childNodes[j].childNodes[0].childNodes[1].innerText)
            }catch(e){}
    }
    else if(document.querySelector('[id="about"]').childNodes[i].childNodes[0].childNodes[0].innerText.includes("Details to know"))
    {
        try{
            for(j = 0; j < document.querySelector('[id="about"]').childNodes[i].childNodes[0].childNodes[1].childNodes.length; j++)
                course.detailsToKnow.push([document.querySelector('[id="about"]').childNodes[i].childNodes[0].childNodes[1].childNodes[j].childNodes[1].innerText, document.querySelector('[id="about"]').childNodes[i].childNodes[0].childNodes[1].childNodes[j].childNodes[2].innerText])
            }catch(e){}
    }
}


//Product Glance
try{
for(i = 1; i < document.querySelector('[data-e2e="key-information"]').childNodes[0].childNodes[0].childNodes[0].childNodes[2].childNodes.length; i++)
    {
        if(document.querySelector('[data-e2e="key-information"]').childNodes[0].childNodes[0].childNodes[0].childNodes[2].childNodes[i].childNodes.length > 1)
            course.productGlance.push([document.querySelector('[data-e2e="key-information"]').childNodes[0].childNodes[0].childNodes[0].childNodes[2].childNodes[i].childNodes[0].innerText,
            document.querySelector('[data-e2e="key-information"]').childNodes[0].childNodes[0].childNodes[0].childNodes[2].childNodes[i].childNodes[1].innerText])
        else
        course.productGlance.push(document.querySelector('[data-e2e="key-information"]').childNodes[0].childNodes[0].childNodes[0].childNodes[2].childNodes[i].childNodes[0].innerText)
    }
}catch(e){}

//Syllabus
try{
    for(i = 0; i < document.querySelector('[data-track-component="syllabus"]').childNodes[0].childNodes.length; i++)
    {
        videoInfo = []
        quizInfo = []
        weeklyStats = []
        weeklyToDo = []

        //Clicks to open the Document
        document.querySelector('[data-track-component="syllabus"]').childNodes[0].childNodes[i].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].click()
        try{
            document.querySelector('[data-track-component="syllabus"]').childNodes[0].childNodes[i].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[2].childNodes[0].click()
        }catch(e){}
        try{
        //Info to store
        hoursToComplete = document.querySelector('[data-track-component="syllabus"]').childNodes[0].childNodes[i].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[2].innerText
        title = document.querySelector('[data-track-component="syllabus"]').childNodes[0].childNodes[i].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].innerText
        weekDescription = document.querySelector('[data-track-component="syllabus"]').childNodes[0].childNodes[i].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].innerText
       
        //Amount of Quizzes/Tests/Readings/Videos and the expected time to finish each
        for(j = 0; j < document.querySelector('[data-track-component="syllabus"]').childNodes[0].childNodes[i].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[2].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes.length; j++)
        {
            weeklyStats.push([document.querySelector('[data-track-component="syllabus"]').childNodes[0].childNodes[i].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[2].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[j].childNodes[0].childNodes[0].childNodes[0].childNodes[1].innerText, 
            document.querySelector('[data-track-component="syllabus"]').childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[2].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[j].childNodes[0].childNodes[0].childNodes[2].innerText])
        }

        /*
        //Amount of Quizzes and length of expected time to finish
        quizStats.push([document.querySelector('[data-track-component="syllabus"]').childNodes[0].childNodes[i].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[1].childNodes[1].innerText,
                        document.querySelector('[data-track-component="syllabus"]').childNodes[0].childNodes[i].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[2].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[2].innerText])
        
        //Amount of Videos and total watchtime
        videoStats.push([document.querySelector('[data-track-component="syllabus"]').childNodes[0].childNodes[i].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[1].innerText,
                        document.querySelector('[data-track-component="syllabus"]').childNodes[0].childNodes[i].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[2].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[2].innerText])
        */
       
        //video/quizInfo
        for(j = 0; j < document.querySelector('[data-track-component="syllabus"]').childNodes[0].childNodes[i].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[2].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes.length; j++)
        {
            for(k = 0; k < document.querySelector('[data-track-component="syllabus"]').childNodes[0].childNodes[i].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[2].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[j].childNodes[1].childNodes.length; k++)
            {
                weeklyToDo.push([document.querySelector('[data-track-component="syllabus"]').childNodes[0].childNodes[i].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[2].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[j].childNodes[1].childNodes[k].childNodes[0].textContent,
                document.querySelector('[data-track-component="syllabus"]').childNodes[0].childNodes[i].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[2].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[j].childNodes[1].childNodes[k].childNodes[2].textContent])
            }
        }   
        }catch(e){}
        week = [title, hoursToComplete, weekDescription, weeklyStats, weeklyToDo]
        course.syllabus.push(week)
        week = []
    }
}catch(e){}

//Partners
try{
for(i = 1; i < document.querySelector('[id="modules"]').childNodes[0].childNodes[0].childNodes[2].childNodes[0].childNodes[1].childNodes.length; i++)
    course.partners.push(document.querySelector('[id="modules"]').childNodes[0].childNodes[0].childNodes[2].childNodes[0].childNodes[1].childNodes[i].childNodes[0].childNodes[1].childNodes[0].innerText)
}catch(e){}

//Review Star Percentage
try{
for(i = 0; i < document.querySelector('[data-unit="reviews-bar-graph"]').childNodes[0].childNodes.length; i++)
    course.reviewStarPercentage.push([document.querySelector('[data-unit="reviews-bar-graph"]').childNodes[0].childNodes[i].childNodes[0].innerText, document.querySelector('[data-unit="reviews-bar-graph"]').childNodes[0].childNodes[i].childNodes[4].innerText])
}catch(e){}

//Instructors
try{
document.querySelector('[id="modules"]').childNodes[0].childNodes[0].childNodes[2].childNodes[0].childNodes[0].childNodes[2].click()
}catch(e){}

try{
temp = []
    for(i = 0; i < document.querySelector('[data-testid="scroll-container"]').childNodes[1].childNodes[2].childNodes.length; i++)
        {
            for(j = 0; j < document.querySelector('[data-testid="scroll-container"]').childNodes[1].childNodes[2].childNodes[i].childNodes[0].childNodes[1].childNodes.length; j++)
            {
                if(document.querySelector('[data-testid="scroll-container"]').childNodes[1].childNodes[2].childNodes[i].childNodes[0].childNodes[1].childNodes[j].childNodes.length > 1)
                {
                    temp.push(document.querySelector('[data-testid="scroll-container"]').childNodes[1].childNodes[2].childNodes[i].childNodes[0].childNodes[1].childNodes[j].childNodes[0].textContent)
                    try{
                    temp.push(document.querySelector('[data-testid="scroll-container"]').childNodes[1].childNodes[2].childNodes[i].childNodes[0].childNodes[1].childNodes[j].childNodes[2].textContent)
                    }catch(e){console.log(j)}
                }
                else
                    temp.push(document.querySelector('[data-testid="scroll-container"]').childNodes[1].childNodes[2].childNodes[i].childNodes[0].childNodes[1].childNodes[j].textContent)
            }
            course.instructors.push(temp)
            temp = []
        }
}catch(e){}

//Instructors: For certain scenarios, one of the child nodes is 0 instead of 2
try{
    temp = []
        for(i = 0; i < document.querySelector('[data-testid="scroll-container"]').childNodes[1].childNodes[0].childNodes.length; i++)
            {
                for(j = 0; j < document.querySelector('[data-testid="scroll-container"]').childNodes[1].childNodes[0].childNodes[i].childNodes[0].childNodes[1].childNodes.length; j++)
                {
                    if(document.querySelector('[data-testid="scroll-container"]').childNodes[1].childNodes[0].childNodes[i].childNodes[0].childNodes[1].childNodes[j].childNodes.length > 1)
                    {
                        temp.push(document.querySelector('[data-testid="scroll-container"]').childNodes[1].childNodes[0].childNodes[i].childNodes[0].childNodes[1].childNodes[j].childNodes[0].textContent)
                        try{
                        temp.push(document.querySelector('[data-testid="scroll-container"]').childNodes[1].childNodes[0].childNodes[i].childNodes[0].childNodes[1].childNodes[j].childNodes[2].textContent)
                        }catch(e){console.log(j)}
                    }
                    else
                        temp.push(document.querySelector('[data-testid="scroll-container"]').childNodes[1].childNodes[0].childNodes[i].childNodes[0].childNodes[1].childNodes[j].textContent)
                }
                course.instructors.push(temp)
                temp = []
            }
    }catch(e){}

//If there is only 1 instructor? (Maybe Will Remove Duplicates Later)
try{
    for(i = 0; i < document.querySelector('[id="modules"]').childNodes[0].childNodes[0].childNodes[2].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes.length; i++)
    {
        if(document.querySelector('[id="modules"]').childNodes[0].childNodes[0].childNodes[2].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[i].childNodes.length > 1)
            temp.push([document.querySelector('[id="modules"]').childNodes[0].childNodes[0].childNodes[2].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[i].childNodes[0].innerText,
            document.querySelector('[id="modules"]').childNodes[0].childNodes[0].childNodes[2].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[i].childNodes[2].innerText])
        else
            temp.push(document.querySelector('[id="modules"]').childNodes[0].childNodes[0].childNodes[2].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[i].childNodes[0].textContent)
    }
    course.instructors.push(temp)
    temp = []
}catch(e){}

//Learner Career Outcomes
try{
    course.learnerCareerOutcomes.push(document.querySelector('[data-track-component="career_outcomes"]').childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].innerText)
    course.learnerCareerOutcomes.push(document.querySelector('[data-track-component="career_outcomes"]').childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].innerText)
    for(i = 0; document.querySelector('[data-track-component="career_outcomes"]').childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[2].childNodes.length; i++)
    {
        course.learnerCareerOutcomes.push(document.querySelector('[data-track-component="career_outcomes"]').childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[2].childNodes[i].innerText)
    }
}catch(e){}  


console.log(JSON.stringify(course))