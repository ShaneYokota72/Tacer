export type ElementDetails = {
    content: string
    type: 'heading' | 'subheading' | 'normal' | 'sidenote' | 'detail' | 'emphasis' | 'video' | 'image' | 'images' | 'link';
    
    className?: string

    // for video or images
    url?: string
    urls?: string[]
    alt?: string
    alts?: string[]
}

export type ChangeLogEntry = {
    date: string
    changes: ElementDetails[]
    previous?: string
    next?: string
}

export const changeLog: Record<string, ChangeLogEntry> = {
    "0.0.14": {
        next: "0.0.15",
        date: "April 21, 2025",
        changes: [
            {
              content: "New feature: Sankey Chart to visualize job application flow 🎉",
              type: "heading"
            },
            {
              content: "As Tacer tracks your job applications, we know your application flows (e.g. applied, first round interview, second round interview, etc.).",
              type: "normal"
            },
            {
              content: "We thought it would be nice to generate a visual representation of your job hunt status. So we added a Sankey Chart to visualize your job application flow!",
              type: "normal"
            },
            {
              content: "You can find the Sankey Chart download button right next to 'Application Status' in the popup.",
              type: "detail"
            },
            {
              content: "Check out how it works:",
              type: "subheading"
            },
            {
              content: "Sankey Chart Demo",
              type: "video",
              url: "/Tacer-0.0.14-video.mp4",
            }
        ]
    },
    "0.0.15": {
        previous: "0.0.14",
        date: "April 29, 2025",
        changes: [
            {
              content: "New feature: Multiple workspaces for your next recruiting cycle 🎉",
              type: "heading"
            },
            {
              content: "As Tacer grows with you throughout your career journey, we've added the ability to create multiple workspaces!",
              type: "normal"
            },
            {
              content: 'Now you can create separate environments with completely separated spreadsheets and data.',
              type: "normal"
            },
            {
              content: 'You can use it however you want. For example:',
              type: "normal"
            },
            {
              content: '-- Keep your "2025 Summer Recruiting" workspace and open a new "2026 Summer Recruiting" workspace.',
              type: "sidenote",
            },
            {
              content: '-- Organize by position types like "Software Engineering" and "Product Management".',
              type: "sidenote",
            },
            
            {
              content: "Heads up for college students: 2026 recruiting has already started for few fields! This should help you keep your new applications organized 😁",
              type: "detail",
              className: "mt-4 italic"
            },
            {
              content: "Check out how it works:",
              type: "subheading"
            },
            {
              content: "New Workspace Demo",
              type: "video",
              url: "/Tacer-0.0.15-video.mp4",
            }
        ]
    },
}