# MCP connection

## Roles
- Host: VS Code (Copilot chat in Agent mode)
- Client: the MCP client built into VS Code
- Server: the Stitch MCP server (https://stitch.googleapis.com/mcp)

## What I did
I added the Stitch server in VS Code with "MCP: Add Server", using HTTP, and saved it in my user-level mcp.json, which is outside the project repository. I created the API key in Stitch settings and put it in the X-Goog-Api-Key header in that file, so the key is not in the repository.

## Problems on the way
My first attempts failed. The server showed Running, but the chat agent could not see any Stitch tools, and the first output log was empty. After I reconfigured the server from scratch and restarted it, the log showed "Connection state: Running" and "Discovered 18 tools".

## Tool call
I did not manage to run a successful Stitch tool call from the chat, so I am not claiming one. What I can show is that the MCP client connected to the Stitch server and discovered its 18 tools (see docs/evidence/mcprunning.png).

Because the chat could not use the tools, I used the fallback: I gave the agent the HTML that Stitch generated for my selected design (docs/evidence/stitch-export.html) and my design screenshots as manual context.

What was missing without a tool call: the agent could not fetch the design itself or stay up to date with it. The required behaviour still comes from my PRD.

## How this differs from pasting a screenshot
With MCP, the client calls a tool on the server and receives a result, so the agent can fetch the design itself. A screenshot or exported code is a fixed copy that I hand over by hand. The agent still needs my PRD to know how the app must behave.

## Evidence
- docs/evidence/mcprunning.png (server Running, Discovered 18 tools)