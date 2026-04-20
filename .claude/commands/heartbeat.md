Run a WoterClip heartbeat cycle using the heartbeat skill.

Parse $ARGUMENTS for optional flags:
- `--dry-run`: Preview mode — report what would be picked without doing work (pass through to heartbeat skill)
- `--persona <name>`: Only process issues tagged with this persona label (pass through to heartbeat skill)

Execute the full 11-step heartbeat procedure via the heartbeat skill, passing the parsed arguments.

On any exit path — success, error, or interruption — remove the lockfile at `.woterclip/.heartbeat-lock` to prevent stuck states.
