let course = {
    "link" : window.location.href,
    "title" : document.querySelector("h1.banner-title").innerText,
    "ratingPercentage" : -1,
    "rating" : document.querySelector('[data-test="number-star-rating"]').childNodes[0].text,
    "ratingCount" : document.querySelector('[data-test="ratings-count-without-asterisks"]').innerText,
    "enrolledCount" : document.querySelector('[class="rc-ProductMetrics"]').childNodes[0].childNodes[0].childNodes[0].innerText,
    "recentViews" : recentViews = document.querySelector('[class="AboutCourse"]').childNodes[0].childNodes[0].childNodes[1].childNodes[0].innerText,
    "instructorRatingCount" : -1,
    "instructorRating" : -1,
    "reviewCount" : -1,
    "reviewRating" : -1,
    "aboutThisCourse" : document.querySelector('div.description').innerText,
    "contentRating" : -1,
    "contentRatingCount" : -1,
    "syllabus" : [],
    "partners" : [],
    "whatYouWillLearn" : [],
    "skills" : [],
    "productGlance" : [],
    "instructors" : [],
    "reviewStarPercentage" : [],
    "enrollInformation" : [],
    "learnerCareerOutcomes": []
}

try{
    reviewCount = document.querySelector('[data-click-key="xdp_v1.xdp.click.reviews_overview_num_reviews_link"]').innerText
    reviewRating = document.querySelector('[class="rc-ReviewsOverview__totals__rating"]').innerText
}catch(e){}

try{
    course.ratingPercentage = document.querySelector('[class="expertise-content-satisfaction-rating"]').childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].innerText
}catch(e){}

try{
    course.contentRating = document.querySelector('[class="expertise-rating p-l-1"]').childNodes[2].innerText
    course.contentRatingCount = document.querySelector('[class="expertise-rating p-l-1"]').childNodes[3].innerText
}catch(e){}

try{
    course.instructorRatingCount = document.querySelector('[class="avg-instructor-rating__ratings-count"]').innerText
    course.instructorRating = document.querySelector('[class="avg-instructor-rating__total"]').innerText
}catch(e){}

try{
    for(var i = 0; i < document.querySelector('[class="CmlLearningObjectives border-a p-x-2 p-t-1"]').childNodes[1].childNodes.length; i++)
    {
    course.whatYouWillLearn.push(document.querySelector('[class="CmlLearningObjectives border-a p-x-2 p-t-1"]').childNodes[1].childNodes[i].innerText)
    }
} catch(e){}

try{
for(i = 0; i < document.querySelector('div.Skills').childNodes[1].childNodes.length; i++)
{
    course.skills.push(document.querySelector('div.Skills').childNodes[1].childNodes[i].innerText)
}
} catch(e){}

for(i = 0; i < document.querySelector('[class="PartnerList"]').childNodes[1].childNodes.length; i++)
{
    course.partners.push([document.querySelector('[class="PartnerList"]').childNodes[1].childNodes[i].childNodes[0].childNodes[1].childNodes[0].innerText, 
                          document.querySelector('[class="PartnerList"]').childNodes[1].childNodes[i].childNodes[0].childNodes[1].childNodes[1].innerText])
}

try{
for(i = 0; i < document.querySelector('[class="rc-InstructorListSection"]').childNodes[1].childNodes[0].childNodes[1].childNodes.length; i++)
{
    if(document.querySelector('[class="rc-InstructorListSection"]').childNodes[1].childNodes[0].childNodes[1].childNodes[i].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes.length > 1)
    {
        course.instructors.push([document.querySelector('[class="rc-InstructorListSection"]').childNodes[1].childNodes[0].childNodes[1].childNodes[i].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].textContent, 
                                 document.querySelector('[class="rc-InstructorListSection"]').childNodes[1].childNodes[0].childNodes[1].childNodes[i].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[1].innerText,
                                 document.querySelector('[class="rc-InstructorListSection"]').childNodes[1].childNodes[0].childNodes[1].childNodes[i].childNodes[0].childNodes[0].childNodes[1].childNodes[1].innerText, 
                                 document.querySelector('[class="rc-InstructorListSection"]').childNodes[1].childNodes[0].childNodes[1].childNodes[i].childNodes[0].childNodes[0].childNodes[1].childNodes[2].innerText, 
                                 document.querySelector('[class="rc-InstructorListSection"]').childNodes[1].childNodes[0].childNodes[1].childNodes[i].childNodes[0].childNodes[0].childNodes[1].childNodes[3].childNodes[0].innerText, 
                                 document.querySelector('[class="rc-InstructorListSection"]').childNodes[1].childNodes[0].childNodes[1].childNodes[i].childNodes[0].childNodes[0].childNodes[1].childNodes[3].childNodes[1].innerText])
    }
    else
    {
        course.instructors.push([document.querySelector('[class="rc-InstructorListSection"]').childNodes[1].childNodes[0].childNodes[1].childNodes[i].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].textContent, 
                                 0,
                                 document.querySelector('[class="rc-InstructorListSection"]').childNodes[1].childNodes[0].childNodes[1].childNodes[i].childNodes[0].childNodes[0].childNodes[1].childNodes[1].innerText, 
                                 document.querySelector('[class="rc-InstructorListSection"]').childNodes[1].childNodes[0].childNodes[1].childNodes[i].childNodes[0].childNodes[0].childNodes[1].childNodes[2].innerText, 
                                 document.querySelector('[class="rc-InstructorListSection"]').childNodes[1].childNodes[0].childNodes[1].childNodes[i].childNodes[0].childNodes[0].childNodes[1].childNodes[3].childNodes[0].innerText, 
                                 document.querySelector('[class="rc-InstructorListSection"]').childNodes[1].childNodes[0].childNodes[1].childNodes[i].childNodes[0].childNodes[0].childNodes[1].childNodes[3].childNodes[1].innerText])
    }
}
}catch(e){
    try{
        for(i = 0; i < document.querySelector('[class="rc-InstructorListSection"]').childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes.length; i++)
        {
            if(document.querySelector('[class="rc-InstructorListSection"]').childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[i].childNodes.length > 1)
            {
                course.instructors.push([document.querySelector('[class="rc-InstructorListSection"]').childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[i].childNodes[0].textContent,
                document.querySelector('[class="rc-InstructorListSection"]').childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[i].childNodes[1].innerText])
            }
            else{
                course.instructors.push([document.querySelector('[class="rc-InstructorListSection"]').childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[i].innerText, 0])   
            }
        }
    }catch(e){}
}

for(i = 0; i < document.querySelector('[class="ProductGlance"]').childNodes.length; i++)
{
    if(document.querySelector('[class="ProductGlance"]').childNodes[i].childNodes[1].childNodes.length > 1)
    {
        course.productGlance.push([document.querySelector('[class="ProductGlance"]').childNodes[i].childNodes[1].childNodes[0].innerText , document.querySelector('[class="ProductGlance"]').childNodes[i].childNodes[1].childNodes[1].innerText])
    }
    else
    {
        course.productGlance.push([document.querySelector('[class="ProductGlance"]').childNodes[i].childNodes[1].childNodes[0].innerText , 0])
    }
}

try{
for(i = 0; i < document.querySelector('[data-test="syllabus-no-collapse"]').childNodes.length; i++)
{
    course.syllabus.push([document.querySelector('[data-test="syllabus-no-collapse"]').childNodes[i].childNodes[2].childNodes[0].childNodes[0].innerText,
                          document.querySelector('[data-test="syllabus-no-collapse"]').childNodes[i].childNodes[2].childNodes[0].childNodes[1].innerText,
                          document.querySelector('[data-test="syllabus-no-collapse"]').childNodes[i].childNodes[2].childNodes[0].childNodes[2].innerText,
                          document.querySelector('[data-test="syllabus-no-collapse"]').childNodes[i].childNodes[2].childNodes[0].childNodes[4].childNodes[0].childNodes[1].innerText])
}
} catch(e){}

try{
for(i = 0; i < document.querySelector('[data-unit="reviews-bar-graph"]').childNodes[0].childNodes.length; i++)
{
    course.reviewStarPercentage.push([document.querySelector('[data-unit="reviews-bar-graph"]').childNodes[0].childNodes[i].childNodes[0].innerText, document.querySelector('[data-unit="reviews-bar-graph"]').childNodes[0].childNodes[i].childNodes[2].innerText])
}
}catch(e){}

course.enrollInformation.push(document.querySelector('[class="EnrollSection p-t-5 p-b-2"]').childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].innerText)

for(i = 0; i < document.querySelector('[class="EnrollSection p-t-5 p-b-2"]').childNodes[0].childNodes[0].childNodes[0].childNodes[2].childNodes.length; i++)
{
    course.enrollInformation.push(document.querySelector('[class="EnrollSection p-t-5 p-b-2"]').childNodes[0].childNodes[0].childNodes[0].childNodes[2].childNodes[i].innerText)
}

try{
    for(i = 1; i < document.querySelector('[class="AboutCourse"]').childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes.length; i++)
    {
        course.learnerCareerOutcomes.push([document.querySelector('[class="AboutCourse"]').childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[i].childNodes[0].childNodes[1].childNodes[0].innerText,
                                            document.querySelector('[class="AboutCourse"]').childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[i].childNodes[0].childNodes[1].childNodes[1].innerText])
    }
}catch(e){}

console.log(JSON.stringify(course))