The user stories of our application:

If there are any discrepancies between the documentation and the issues on GitHub, please prioritize the issues on GitHub.

_Click on the User Story's title to see related issue. To see the task breakdown, consult the issues on the GitHub project. Each User Story has a number (1 to 5) with the tasks identified as x.1, x.2, x.3, etc._

**[User Story 1: Upload Pictures](https://github.com/CamilBouzidi/-REDACTED-a-SOEN-341-Repo/issues/8)**


| User Story        | P | SP |
|:-----------------------|:-:|:--:|
| Uploading Pictures                  | 1 | 13 |

<!-- Write a Description Below -->

As a user, I want to upload pictures on my account in order to share my life with my friends from a distance. I would not want to be limited in the type of picture that I could upload.

<!-- Don't write anything near the line -->
------------------------------------------

## Risk

The risk for this user story is:

* Using Firebase API, which is a relatively new technology for all of us

## Task List

- [x] Define Acceptance test
- [x] Assign Story Point Value
- [x] Assign Priority Number
- [x] Integrate Firebase to Angular [#48] @laurentlaurent 
- [x] User Account login [#47] @laurentlaurent 
- [x] User profile page
- [x] User picture page
- [x] Send pictures to Firebase [#49] @tommy-josepovic 
- [x] Create a picture feed [#73] @tommy-josepovic   
- [x] Define tasks
- [x] Verify issue completion with Acceptance Test. Done!

<!-- 
Enter some tasks above
~~~~~~~HELPER~~~~
Use checkboxes like this:
- [ ] Task 1 (Add link to issue number if needed)
- [ ] Task 2 (@ people assigned to the task
~~~~~~~~~~~~~~~
-->
<!-- Don't write anything near the line -->
------------------------------------------

<!--
## Requirements

* List Requirements if there are any
-->

## Acceptance Tests [#78]

* User can log in
* User can see their profile
* User can upload jpg, png, (other formats?)
* User cannot upload non-pictures files
* User can see uploaded pictures in their profile
<!---
* User cannot access pictures they do not own/are not friends with owner--->

<!-- Don't write anything near the line -->
------------------------------------------

## Related features/user stories

<!--~~~~HELPER~~~~~
Use bullet points like this:
* Related feature [#A]
* Related issue number [#B]
~~~~~~~~~~~~~~~-->

## Additional context
Add any other context or screenshots about the feature request here.

**[User Story 2: Leave comments on a posted picture](https://github.com/CamilBouzidi/-REDACTED-a-SOEN-341-Repo/issues/13)**


| User Story/Task        | P | SP |
|:-----------------------|:-:|:--:|
| Leave comments on a posted picture                  | 2 | 5 |

<!-- Write a Description Below -->

As a user, I want to be able to comment on a picture to let others know how I feel about the picture. This will send a notification to the user who posted the picture.

<!-- Don't write anything near the line -->
------------------------------------------

## Risk

The risk for this user story is:

* Using Angular Material for the UI, which is a new component library for most of us.

## Task List

- [x] Define Acceptance test
- [x] Assign Story Point Value
- [x] Assign Priority Number
- [x] Define tasks
- [x] Verify issue completion with Acceptance Test. Done!

<!-- 
Enter some tasks above
~~~~~~~HELPER~~~~
Use checkboxes like this:
- [ ] Task 1 (Add link to issue number if needed)
- [ ] Task 2 (@ people assigned to the task
~~~~~~~~~~~~~~~
-->
<!-- Don't write anything near the line -->
------------------------------------------

<!--
## Requirements

* List Requirements if there are any
-->

## Acceptance Tests [#85]

* User can comment under their own picture
* Find a way to make comment UI scalable
* Have user who posted comment show up under picture
* Set up notification

<!-- Don't write anything near the line -->
------------------------------------------

## Related features/user stories

<!--~~~~HELPER~~~~~
Use bullet points like this:
* Related feature [#A]
* Related issue number [#B]
~~~~~~~~~~~~~~~-->

## Additional context
Add any other context or screenshots about the feature request here.

**[User Story 3: Follow other users](https://github.com/CamilBouzidi/-REDACTED-a-SOEN-341-Repo/issues/15)** 


| User Story        | P | SP |
|:-----------------------|:-:|:--:|
| Follow others                  | High | 8 |

<!-- Write a Description Below -->

As a user, I would like to keep up with other users' feeds by following their account on the platform. Similarly, I would want other users to be able to follow me on the platform.

<!-- Don't write anything near the line -->
------------------------------------------

## Risks

The risk for this user story is:

* Using Firebase to act as our database, same type of risk as user story 1 [#8]

## Task List

- [x] Define Acceptance test
- [x] Assign Story Point Value
- [x] Assign Priority Number
- [x] Define tasks
- [x] Verify issue completion with Acceptance Test. Done!

<!-- 
Enter some tasks above
~~~~~~~HELPER~~~~
Use checkboxes like this:
- [ ] Task 1 (Add link to issue number if needed)
- [ ] Task 2 (@ people assigned to the task
~~~~~~~~~~~~~~~
-->
<!-- Don't write anything near the line -->
------------------------------------------

<!--
## Requirements

* List Requirements if there are any
-->

## Acceptance Tests [#91]

* Set up notification
* List of followers/people we follow

<!-- Don't write anything near the line -->
------------------------------------------

## Related features/user stories

<!--~~~~HELPER~~~~~
Use bullet points like this:
* Related feature [#A]
* Related issue number [#B]
~~~~~~~~~~~~~~~-->

## Additional context
Add any other context or screenshots about the feature request here.

**[User Story 4 (Additional Feature): ShutterFeed Stories](https://github.com/CamilBouzidi/-REDACTED-a-SOEN-341-Repo/issues/24)**


| User Story        | P | SP |
|:-----------------------|:-:|:--:|
| ShutterFeed Stories  | 8 | 8 |

<!-- Write a Description Below -->

As a user, I would like to be able to upload pictures that would disappear after a day, separately from my main feed of pictures (say, in my Story). That way, I would still be able to update my followers on my day-to-day life without compromising the aesthetic or themes of my feed.

<!-- Don't write anything near the line -->
------------------------------------------

## Risks

The fact that this user story deals with time (making the picture disappear after 24h) is going to add a level of complexity.

## Task List

- [x] Define Acceptance test
- [x] Assign Story Point Value
- [x] Assign Priority Number
- [x] Define tasks
- [ ] Verify issue completion with Acceptance Test. Done!


------------------------------------------

## Acceptance Tests [#99]

* Can post a picture 
* Picture will disappear after 24h 

<!-- Don't write anything near the line -->
------------------------------------------

## Related features/user stories


## Additional context
Add any other context or screenshots about the feature request here.

**[User Story 5 (Additional Feature): Username & Username Generator](https://github.com/CamilBouzidi/-REDACTED-a-SOEN-341-Repo/issues/18)**

<!-- ==== Template for User Story Checklist ====

1. Enter the name
2. Describe the feature or write the user story in a first-person point of view.
3. Write the acceptance test(s). Those are the validation tests that must be met to consider the issue to be closed.
4. Describe any related features or user stories. Doing so will help us create epics more easily.
5. List the tasks to be performed to complete the user story.
6. Label the issue
7. Add new user story to wiki

 ============================================-->

<!-- Choose the type: User Story or Task. Don't worry if the pipes don't line up-->

| User Story        | P | SP |
|:-----------------------|:-:|:--:|
| Username and generator                   | 1 | 8 |

<!-- Write a Description Below -->

As a user, I would like to pick out a username so that my real name is not always displayed. I would like suggestions for available usernames to pick from when I request one.

<!-- Don't write anything near the line -->
------------------------------------------

## Task List

- [x] Define Acceptance test
- [x] Assign Story Point Value
- [x] Assign Priority Number
- [x] Define tasks
- [ ] Verify issue completion with Acceptance Test. Done!

<!-- 
Enter some tasks above
~~~~~~~HELPER~~~~
Use checkboxes like this:
- [ ] Task 1 (Add link to issue number if needed)
- [ ] Task 2 (@ people assigned to the task
~~~~~~~~~~~~~~~
-->
<!-- Don't write anything near the line -->
------------------------------------------

<!--
-->

## Acceptance Tests

* When signing up, I need to be prompted to choose a username.
* If the user name already exists, I am prompted with another choice that starts with the first letter that I have entered.
* Once my username is selected, it will appear whenever I post or comment.

<!-- Don't write anything near the line -->
------------------------------------------

## Related features/user stories

<!--~~~~HELPER~~~~~
Use bullet points like this:
* Related feature [#A]
* Related issue number [#B]
~~~~~~~~~~~~~~~-->

## Additional context
Add any other context or screenshots about the feature request here.