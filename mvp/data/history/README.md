# Synthetic history for the replay demo

Four invented past weeks of the demo region. Each folder holds the usual input files plus `actual_plan.csv`: the plan the planner "shipped". It imitates habit (each zone from its preferred warehouse, cheapest inbound first). Nothing here is Company A data, and the savings are not a forecast.

Rebuild: `python -m nordic_flow history data/history`. Replay all weeks: `python -m nordic_flow replay data/history`.
