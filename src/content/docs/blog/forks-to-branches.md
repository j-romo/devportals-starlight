---
title: "From Forks to Branches: Streamlining Team Git Workflows"
description: "How a 50-person technical writing team transitioned from forks to centralized branching to simplify collaboration and reduce workflow friction"
date: 2025-12-01
authors:
  - name: Joaquin Romo
tags:
  - git
  - workflow
  - team-collaboration
  - forks
  - branching-strategy
  - technical-writing
---

As part of a GitHub working group within a 50-person technical writing team, I recently helped lead our transition from a fork-based workflow to a centralized branching strategy. This shift simplified our collaboration model and reduced friction across four sub-teams. Here's what we learned.

## The Challenge

Our team of technical writers was using personal forks of our main documentation repository. While this approach worked, we identified several pain points:

- **Extra complexity** for common operations
- **Confusion** about which remote to push/pull from
- **Inconsistent workflows** across team members
- **Limited value** for our use case compared to open-source projects

The GitHub working group formed with representatives from each sub-team to evaluate whether forks still made sense for our internal collaboration model.

## Fork-Based Workflow: Pros and Cons

### Pros

- **Permission isolation**: Contributors don't need write access to the main repository
- **Safety net**: Mistakes in personal forks don't affect the main repo
- **Open-source standard**: Familiar pattern for external contributors
- **Experimentation space**: Break things without consequences

### Cons

- **Cognitive overhead**: Managing two remotes (`origin` for fork, `upstream` for main repo)
- **Complex tracking**: Feature branches track `upstream/main`, not `origin/main`
- **Push/pull confusion**: Easy to push to wrong remote
- **Sync maintenance**: Keeping forks updated requires extra steps
- **Limited benefit**: For trusted team members with write access, forks add complexity without security gains

## Centralized Branching: Pros and Cons

### Pros

- **Simpler mental model**: One remote (`origin`), straightforward push/pull
- **Consistent workflow**: All team members follow identical patterns
- **Reduced friction**: Create branch, push, open PR—done
- **Better visibility**: All work visible in main repository
- **Easier collaboration**: Team members can push to each other's branches
- **Natural for internal teams**: Aligns with typical corporate git usage

### Cons

- **Requires repository access**: All contributors need write permissions
- **Branch proliferation**: Main repo contains everyone's feature branches
- **Less isolation**: No fork-level separation between contributors
- **Not suitable for open-source**: External contributors can't use this model

## The Migration Process

Transitioning from forks to branches required careful planning to avoid disrupting in-flight work. Here's the approach we took:

### 1. Timing Considerations

- Existing pull requests from forks remain unaffected on GitHub
- PR merges happen server-side, independent of local configuration
- Safe to reconfigure during active PR reviews

### 2. Repository Reconfiguration

Preserve fork as backup:

    git remote rename origin fork

Promote main repository to primary remote:

    git remote rename upstream origin

Update branch tracking:

    git branch --set-upstream-to=origin/main main

### 3. New Workflow

Start new work:

    git checkout main
    git pull origin main
    git checkout -b TICKET-123-feature

Push with tracking:

    git push -u origin TICKET-123-feature

Open PR: same repo, branch → main

## Key Insights from the Working Group

1. **Context matters**: Forks excel for open-source projects with external contributors. Internal teams with repository access benefit from simpler branching models.

2. **Change management**: Clear communication about the transition reduced confusion. We provided documentation and supported team members through the migration.

3. **Tooling adaptation**: Some team members had scripts and tools configured for fork workflows. We identified these dependencies early and provided migration guidance.

4. **No one-size-fits-all**: Different teams have different needs. Our analysis showed that for our use case—a private repository with trusted contributors—the fork overhead wasn't justified.

## Results

Post-migration, our team experienced:

- **Reduced onboarding time** for new technical writers
- **Fewer git-related questions** in team channels
- **More consistent practices** across sub-teams
- **Faster PR workflows** without fork sync issues

## Conclusion

The fork versus branch decision isn't about which approach is objectively better—it's about matching your workflow to your team structure and needs. For our internal documentation team with repository write access, moving to a centralized branching model eliminated unnecessary complexity while maintaining code review quality and collaboration practices.

As technical writers increasingly manage documentation as code, understanding git workflow trade-offs becomes essential. This migration taught me that technical leadership means not just documenting tools, but critically evaluating whether those tools serve your team's actual needs.

---

*Have you transitioned between fork and branch workflows? I'd love to hear about your experience. Connect with me on LinkedIn to continue the conversation.*