import {workflowArtifactsPullRequestCommentAction} from '@ptabor/github-actions'
import * as core from '@actions/core'
import * as github from '@actions/github'

core.info('Starting v1.4.10')
core.info(JSON.stringify(github.context))
core.info('Really Starting...')
workflowArtifactsPullRequestCommentAction()
