def create_project(user_id, org_id, data):
    new_project = db.projects.insert(data)
    # Invalidate both user and organization scoped caches
    invalidate_cache(f"projects:list:u_{user_id}")
    if org_id:
        invalidate_cache(f"projects:list:org_{org_id}")
    return new_project
