import {workflowArtifactsPullRequestCommentAction} from '@ptabor/github-actions'
import * as core from '@actions/core'
import * as github from '@actions/github'

core.info('Starting')
core.info(JSON.stringify(github.context.payload))
core.info('Really Starting...')
workflowArtifactsPullRequestCommentAction()
