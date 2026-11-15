# MCP connection

## Roles
- Host: VS Code (with the Copilot chat in Agent mode)
- Client: the MCP client built into VS Code
- Server: the Stitch MCP server (https://stitch.googleapis.com/mcp)

## What I did
I added the Stitch server in VS Code with "MCP: Add Server", using HTTP, and saved it in my user-level mcp.json, which is outside the project repository. I created the API key in Stitch settings and put it in the X-Goog-Api-Key header in that file, so the key is not in the repository.

## Problems on the way
My first attempts failed. The server showed Running, but the chat agent could not see any Stitch tools and replied that none were available. The first time, the output log was empty. After I reconfigured the server from scratch, restarted it, and enabled the Stitch tools in the chat, the log showed "Connection state: Running" and "Discovered 18 tools", and the agent could use them.

## Tool call
- Tool called: [exact tool name the agent showed, for example the one that lists projects]
- What I asked it to do: list my Stitch projects, find Asta's Preparation Dashboard, and retrieve the design context
- Result: [one or two sentences: what came back, for example the project name and the screen or design information]
- What was missing: [anything the result did not give, for example the required behaviour, which still has to come from my PRD]

## How this differs from pasting a screenshot
With MCP, the client calls a tool on the server and receives a result, so the agent can fetch the design itself. A screenshot or exported code is a fixed copy that I hand over by hand. The agent still needs my PRD to know how the app must behave.

## Evidence
- docs/evidence/mcp-log.png (server Running, Discovered 18 tools)
