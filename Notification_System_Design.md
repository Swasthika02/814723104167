# Notification System Design

## Approach
- Notifications are sorted based on priority
- Priority order:
  Placement > Result > Event
- Within same type, sorted by latest timestamp

## Implementation
- Built using Node.js and Express
- Middleware used for logging each request
- API fetch + processing done in service layer

## Sorting Logic
- First compare notification type priority
- Then compare timestamps (latest first)

## Optimization
- Only top 10 notifications returned using slice()

## Note
Since external API required authorization, mock data was used for testing logic.