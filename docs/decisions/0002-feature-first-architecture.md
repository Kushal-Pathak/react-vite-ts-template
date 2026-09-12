# ADR-0002: Use Feature-First Architecture

## Status

Accepted

## Context

Projects based on this template may grow into multiple business areas.

## Decision

Use feature-first organization for business-specific code.

Shared code remains in global shared folders.

## Consequences

### Benefits

- related code stays together
- easier navigation
- scalable project structure

### Trade-offs

- developers must decide whether code is feature-specific or genuinely shared
