Let's talk about Git branches.

Everyone who works on a feature on an app works (typically!) works in a different Git branch.

In general, if you're working on one feature, you do _not_ want to see the code from other features. You're too busy on your feature and your feature (usually) doesn't have any relation to theirs.

When you switch from one branch to another, you're actually switching what files are in your directory! That's because the `.git` folder is storing all the changes made in your repository. When you switch from branch to branch, you're switching what changes are active.