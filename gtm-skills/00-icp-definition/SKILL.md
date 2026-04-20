---
name: icp-definition
description: Auto-loaded by all GTM skills. Contains the persistent ICP definition. Edit ICP.md to update targeting criteria.
---

# ICP Definition

This skill makes `ICP.md` available to all other GTM skills.

When any skill asks for ICP context, read `00-icp-definition/ICP.md` from the project root.

If `ICP.md` is empty or missing key fields (Industry, Company size, Buyer title), stop and tell the user:
"Your ICP definition is incomplete. Please fill in `gtm-skills/00-icp-definition/ICP.md` before running any pipeline."
