export const menu = [
    {
        title: "Dashboard",
        path: "/dashboard",
        icon: "material-symbols:team-dashboard-outline",
        key: 1,
        role: ["director"]
    },
    {
        title: "Stafss",
        path: "/staff",
        icon: "medical-icon:i-care-staff-area",
        key: 2,
        role: ["director", "finance"]
    },
    {
        title: "Roles",
        path: "/roles",
        icon: "eos-icons:role-binding-outlined",
        key: 0,
        role: ["director"]
    },
    {
        title: "Teachers",
        path: "/teachers",
        icon: "fluent-emoji-high-contrast:teacher",
        role: ['admin']
    },
    {
        title: "Students",
        path: "/students",
        icon: "material-symbols:team-dashboard-outline",
        key: 3,
        role: ["admin"]
    },
    {
        title: "Courses",
        path: "/courses",
        icon: "tdesign:course",
        key: 4,
        role: ["admin"]
    },
    {
        title: "Rooms",
        path: "/rooms",
        icon: "cbi:roomsother",
        key: 5,
        role: ["admin"]
    }, {
        title: "Groups",
        path: "/groups",
        icon: "healthicons:i-groups-perspective-crowd-outline",
        key: 6,
        role: ["admin"]
    },
    {
        title: "Mening Kurslarim",
        path: "/mycourses",
        icon: "tdesign:course",
        role: ["teacher"]
    },
    {
        title: "Profile",
        path: "/profile",
        icon: "ic:outline-settings",
        key: 7,
        role: ["admin", "director", "finance", "teacher", "student"]
    }
]