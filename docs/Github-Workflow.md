# Github Workflow

_See also [Git help](Git-Help) and [Wiki help](Wiki-Help)_

This page will serve as a guide to produce a streamlined process for the use of Github's features.

## Using Github with Agile Methodology

See this article: [GitHub Issues Can be Agile if You Do it Right](https://zube.io/blog/agile-project-management-workflow-for-github-issues/)

## Issues Workflow

### Choose a template

To ensure uniformity and that we don't forget anything, we should use a template to create an issue.

Available templates:

* User Stories
  
  * For Issues relating to User Stories (it can also be slightly modified to also be for tasks)

### Choose a label

To ensure that we can easily understand the type of the issue from the Issue Page, label the issue accordingly.

### (Optional) Choose a milestone

Milestones do not have to be set immediately.

### (Optional) Assign to the project board

If the issue has to be worked on for the on-going sprint, then it should be added to the Project Board.

Available cards list in the Project Board

* Waiting

  * Something is blocking the completion of that issue

* Sprint Backlog

  * The default list that projects get added to when you add them to the project board. **You should only move the task away from the Sprint backlog when it has been properly defined** (tasks, label, priority, story points, acceptance test).

* Deck/Epic/User Story Tracker

  * Cards moved there serve as a reminder of anything that is **not a task** that is being worked on. Note that you do not work on user stories, but only on **tasks related to them**. Basically, cards in that list stay there until all tasks related to them are complete.

* Ready to Start

  * That serves as an inbox of tasks that have been properly defined and that should be assigned and worked on.
  
* In Progress

  * When you have been assigned to the task and you are working on it, then you should move it to `In Progress`.

* Review in Progress

  * The card is automatically moved there when a pull request relating to the issue is added.

* Reviewer approved

  * The card is automatically moved there when the pull request relating to the issue has been approved by a reviewer

* Done

  * The card is automatically moved there when a pull request containining the github magic words to automatically close issues is used and it is merged. You can also automatically move the cards there by closing the issue. (You should not move the cards manually there. **Close the issue instead**).

### (Optional) Assign people

Assigning people notifies them of progress and ensures that workload is balanced.
