export type ElementDetails = {
    content: string
    type: 'heading' | 'subheading' | 'normal' | 'detail' | 'emphasis' | 'video' | 'image' | 'images' | 'link';

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
}