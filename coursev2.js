let course = {
    "link" : window.location.href,
    "date" : date.toLocaleDateString(),
    "title" : document.querySelector('[data-e2e="hero-title"]').innerText,
    "ratingPercentage" : document.querySelector('[data-e2e="key-information"]').childNodes[0].childNodes[0].childNodes[0].childNodes[2].childNodes[0].childNodes[5].innerText, 
    "rating": document.querySelector('[data-track-component="reviews_module"]').childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[1].innerText,
    "ratingCount": document.querySelector('[data-track-component="reviews_module"]').childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[2].childNodes[0].childNodes[0].innerText,
    "enrolledCount" : document.querySelector('[data-e2e="hero-module"]').childNodes[5].childNodes[0].childNodes[0].childNodes[0].innerText,
    "recentViews": -1, //Find (Couldn't find)
    "instuctorRatingCount": document.querySelector('[id="modules"]').childNodes[0].childNodes[0].childNodes[2].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[1].childNodes[1].innerText,
    "instructorRating": document.querySelector('[id="modules"]').childNodes[0].childNodes[0].childNodes[2].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[0].innerText,
    "reviewCount": -1, //Find
    "reviewRating": -1, //Find
    "aboutThisCourse": -1, //Find
    "contentRating": -1, //Find
    "contentRatingCount": -1, //Find
    "syllabus": -1, //Find
    "partners": [],
    "whatYouWillLearn": [],
    "skills": [],
    "productGlance": [], //Find
    "instructors": [],
    "reviewStarPercentage": [],
    "enrollInformation": [], //Find
    "learnerCareerOutcomes": [], //Find
    
    //Find? Or Map info to coursev1
    "classContent": [],
     "detailsToKnow": [],
    "keyInformation": []
}   

for(var i = 0; i < document.querySelector('[id="about"]').childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes.length; i++)
    course.whatYouWillLearn.push(document.querySelector('[id="about"]').childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[i].innerText);

for(i = 0; i < document.querySelector('[id="about"]').childNodes[1].childNodes[0].childNodes[1].childNodes.length; i++)
    course.skills.push(document.querySelector('[id="about"]').childNodes[1].childNodes[0].childNodes[1].childNodes[i].childNodes[0].childNodes[1].innerText)

for(i = 0; i < document.querySelector('[id="about"]').childNodes[2].childNodes[0].childNodes[1].childNodes.length; i++)
    course.detailsToKnow.push([document.querySelector('[id="about"]').childNodes[2].childNodes[0].childNodes[1].childNodes[i].childNodes[1].innerText, document.querySelector('[id="about"]').childNodes[2].childNodes[0].childNodes[1].childNodes[i].childNodes[2].innerText])

for(i = 1; i < document.querySelector('[data-e2e="key-information"]').childNodes[0].childNodes[0].childNodes[0].childNodes[2].childNodes.length; i++)
    {
        if(document.querySelector('[data-e2e="key-information"]').childNodes[0].childNodes[0].childNodes[0].childNodes[2].childNodes[i].childNodes.length > 1)
            course.keyInformation.push([document.querySelector('[data-e2e="key-information"]').childNodes[0].childNodes[0].childNodes[0].childNodes[2].childNodes[i].childNodes[0].innerText,
            document.querySelector('[data-e2e="key-information"]').childNodes[0].childNodes[0].childNodes[0].childNodes[2].childNodes[i].childNodes[1].innerText])
        else
        course.keyInformation.push(document.querySelector('[data-e2e="key-information"]').childNodes[0].childNodes[0].childNodes[0].childNodes[2].childNodes[i].childNodes[0].innerText)
    }

for(i = 0; i < document.querySelector('[data-track-component="syllabus"]').childNodes[0].childNodes.length; i++)
{
    course.classContent.push([document.querySelector('[data-track-component="syllabus"]').childNodes[0].childNodes[i].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].innerText,
    document.querySelector('[data-track-component="syllabus"]').childNodes[0].childNodes[i].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[2].innerText])
}

for(i = 1; i < document.querySelector('[id="modules"]').childNodes[0].childNodes[0].childNodes[2].childNodes[0].childNodes[1].childNodes.length; i++)
    course.partners.push(document.querySelector('[id="modules"]').childNodes[0].childNodes[0].childNodes[2].childNodes[0].childNodes[1].childNodes[i].childNodes[0].childNodes[1].childNodes[0].innerText)

for(i = 0; i < document.querySelector('[data-unit="reviews-bar-graph"]').childNodes[0].childNodes.length; i++)
    course.reviewStarPercentage.push([document.querySelector('[data-unit="reviews-bar-graph"]').childNodes[0].childNodes[i].childNodes[0].innerText, document.querySelector('[data-unit="reviews-bar-graph"]').childNodes[0].childNodes[i].childNodes[4].innerText])
        
document.querySelector('[id="modules"]').childNodes[0].childNodes[0].childNodes[2].childNodes[0].childNodes[0].childNodes[2].click()

for(i = 0; i < document.querySelector('[class="cds-Dialog-dialog"]').childNodes[1].childNodes[1].childNodes[2].childNodes.length; i++)
    {
        if(document.querySelector('[id="modules"]').childNodes[0].childNodes[0].childNodes[2].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[i].childNodes.length > 1)
        {
            course.instructor.push(document.querySelector('[id="modules"]').childNodes[0].childNodes[0].childNodes[2].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[3].childNodes[0].innerText)
            course.instructor.push(document.querySelector('[id="modules"]').childNodes[0].childNodes[0].childNodes[2].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[3].childNodes[2].innerText)
        }
        else
            course.instructor.push(document.querySelector('[id="modules"]').childNodes[0].childNodes[0].childNodes[2].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[1].innerText)
    }
