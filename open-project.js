// Menu: Open Project
// Description: List dev projects
// Author: John Lindquist
// Twitter: @johnlindquist

let { projects, write } = await db("projects", {
  projects: [
    "~/.kit",
    "~/work",
  ],
})

onTab("Open", async () => {
  let project = await arg("Open project:", projects)
  edit(project)
})

onTab("Add", async () => {
  while (true) {
    let project = await arg(
      "Add path to project:",
      md(projects.map(project => `* ${project}`).join("\n"))
    )

    projects.push(project)
    await write()
  }
})

onTab("Remove", async () => {
  while (true) {
    let project = await arg("Open project:", projects)

    let indexOfProject = projects.indexOf(project)
    projects.splice(indexOfProject, 1)
    await write()
  }
})
