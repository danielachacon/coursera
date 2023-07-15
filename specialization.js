let specialization = {
	"link" : window.location.href,
	"title" : document.querySelector("h1.banner-title").innerText,
	"subheading" : document.querySelector('[data-test="banner-title-container"]').childNodes[1].innerText,
	"partners" : [],
	"whatYouWillLearn" : [],
	"skills" : [],
	"productGlance" : [],
	"ratingCount" : document.querySelector('[data-test="ratings-count-without-asterisks"]').innerText,
	"rating" : document.querySelector('[data-test="number-star-rating"]').childNodes[0].textContent,
	"enrolledCount" : document.querySelector('[class="rc-ProductMetrics"]').childNodes[0].childNodes[0].childNodes[0].innerText,
	"recentViews" : document.querySelector('[class="AboutCourse"]').childNodes[0].childNodes[0].childNodes[1].childNodes[0].innerText,
	"aboutThisSpecialization" : document.querySelector('div.description').innerText,
	"learnerOutcomes" : [],
	"appliedProjectDescription": [],
	"courseList" : [],
	"instructors" : [],
	"enrollInformation" : [],
	
}

for(var i = 0; i < document.querySelector('[class="CmlLearningObjectives border-a p-x-2 p-t-1"]').childNodes[1].childNodes.length; i++)
{
	specialization.whatYouWillLearn.push(document.querySelector('[class="CmlLearningObjectives border-a p-x-2 p-t-1"]').childNodes[1].childNodes[i].innerText)
}

for(var i = 0; i < document.querySelector('div.Skills').childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes.length; i++)
{
	specialization.skills.push(document.querySelector('div.Skills').childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[i].innerText)
}

for(var i = 0; i < document.querySelector('[class="ProductGlance"]').childNodes.length; i++)
{
 	specialization.productGlance.push([document.querySelector('[class="ProductGlance"]').childNodes[i].childNodes[1].childNodes[0].innerText , document.querySelector('[class="ProductGlance"]').childNodes[i].childNodes[1].childNodes[1].innerText])
}

for(var i = 1; i < document.querySelector('[class="LearnerOutcomes__container m-b-2 m-t-3"]').childNodes.length; i++)
{
	specialization.learnerOutcomes.push([document.querySelector('[class="LearnerOutcomes__container m-b-2 m-t-3"]').childNodes[i].childNodes[0].childNodes[0].childNodes[0].innerText, document.querySelector('[class="LearnerOutcomes__container m-b-2 m-t-3"]').childNodes[i].childNodes[0].childNodes[0].childNodes[1].innerText])
}

for(var i = 0; i < document.querySelector('[class="applied-project-description"]').childNodes[0].childNodes[0].childNodes.length; i++)
{
	specialization.appliedProjectDescription.push(document.querySelector('[class="applied-project-description"]').childNodes[0].childNodes[0].childNodes[i].innerText)
}

for(var i = 0; i < document.querySelector('[data-e2e="course-list"]').childNodes[0].childNodes[1].childNodes[0].childNodes.length; i++)
{
	specialization.courseList.push(document.querySelector('[data-e2e="course-list"]').childNodes[0].childNodes[1].childNodes[i].childNodes[2].childNodes[0].innerText)
}

for(var i = 0; i < document.querySelector('[class="rc-InstructorListSection"]').childNodes[1].childNodes[0].childNodes[0].childNodes.length; i++)
{
	if(document.querySelector('[class="rc-InstructorListSection"]').childNodes[1].childNodes[0].childNodes[0].childNodes[i].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes.length > 1)
	{
		specialization.instructors.push([document.querySelector('[class="rc-InstructorListSection"]').childNodes[1].childNodes[0].childNodes[0].childNodes[i].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].textContent, 
		document.querySelector('[class="rc-InstructorListSection"]').childNodes[1].childNodes[0].childNodes[0].childNodes[i].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[1].innerText,
		document.querySelector('[class="rc-InstructorListSection"]').childNodes[1].childNodes[0].childNodes[0].childNodes[i].childNodes[0].childNodes[0].childNodes[1].childNodes[1].innerText, 
		document.querySelector('[class="rc-InstructorListSection"]').childNodes[1].childNodes[0].childNodes[0].childNodes[i].childNodes[0].childNodes[0].childNodes[1].childNodes[2].innerText, 
		document.querySelector('[class="rc-InstructorListSection"]').childNodes[1].childNodes[0].childNodes[0].childNodes[i].childNodes[0].childNodes[0].childNodes[1].childNodes[3].childNodes[0].innerText, 
		document.querySelector('[class="rc-InstructorListSection"]').childNodes[1].childNodes[0].childNodes[0].childNodes[i].childNodes[0].childNodes[0].childNodes[1].childNodes[3].childNodes[1].innerText])
	}
	else
	{
		specialization.instructors.push([document.querySelector('[class="rc-InstructorListSection"]').childNodes[1].childNodes[0].childNodes[0].childNodes[i].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].textContent, 
		0,
		document.querySelector('[class="rc-InstructorListSection"]').childNodes[1].childNodes[0].childNodes[0].childNodes[i].childNodes[0].childNodes[0].childNodes[1].childNodes[1].innerText, 
		document.querySelector('[class="rc-InstructorListSection"]').childNodes[1].childNodes[0].childNodes[0].childNodes[i].childNodes[0].childNodes[0].childNodes[1].childNodes[2].innerText, 
		document.querySelector('[class="rc-InstructorListSection"]').childNodes[1].childNodes[0].childNodes[0].childNodes[i].childNodes[0].childNodes[0].childNodes[1].childNodes[3].childNodes[0].innerText, 
		document.querySelector('[class="rc-InstructorListSection"]').childNodes[1].childNodes[0].childNodes[0].childNodes[i].childNodes[0].childNodes[0].childNodes[1].childNodes[3].childNodes[1].innerText])
	}
}

for(var i = 0; i < document.querySelector('[class="PartnerList"]').childNodes[1].childNodes.length; i++)
{
	specialization.partners.push([document.querySelector('[class="PartnerList"]').childNodes[1].childNodes[i].childNodes[0].childNodes[1].childNodes[0].innerText, 
					document.querySelector('[class="PartnerList"]').childNodes[1].childNodes[i].childNodes[0].childNodes[1].childNodes[1].innerText])
}

specialization.enrollInformation.push(document.querySelector('[class="EnrollSection p-t-5 p-b-2"]').childNodes[0].childNodes[0].childNodes[0].childNodes[2].innerText)

for(var i = 0; i < document.querySelector('[class="EnrollSection p-t-5 p-b-2"]').childNodes[0].childNodes[0].childNodes[0].childNodes[3].childNodes.length; i++)
{
	specialization.enrollInformation.push(document.querySelector('[class="EnrollSection p-t-5 p-b-2"]').childNodes[0].childNodes[0].childNodes[0].childNodes[3].childNodes[i].innerText)

}