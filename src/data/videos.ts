// ---------------------------------------------------------------------
// EDIT THIS FILE to add/remove/change your training videos.
// No other code needs to change.
//
// For each video, fill in:
//   title       - shown as the card heading
//   description - one or two lines shown under the title
//   url         - the link to open when someone clicks "Watch video"
//                 (this can be a normal SharePoint "share" link)
//   embedUrl    - OPTIONAL. If your SharePoint video has an "Embed" link
//                 (SharePoint/Stream: Share -> Embed -> copy the URL
//                 from inside the <iframe src="..."> code), paste that
//                 URL here and the video will play directly on the page
//                 instead of only showing a "Watch video" button.
// ---------------------------------------------------------------------

export type VideoItem = {
  id: string;
  title: string;
  description: string;
  url: string;
  embedUrl?: string;
};

export const learningVideos: VideoItem[] = [
  {
    id: "intro-safety",
    title: "Class and Structure",
    description: "Core safety rules every new engineer must know before their first site visit.",
    url: "https://kone.sharepoint.com/:v:/r/sites/IVCTeam/Shared%20Documents/03_KTOC%20VC%20team/07_TRAINING/00_TRAINING_RESTRUCTURING_2024/Training%20videos/Presentation%20Videos/Class%20and%20Structure.mp4?d=w381e81d0708a43ca8e567a294577ba5c&csf=1&web=1&e=dTRoq0",
    // embedUrl: "https://yourcompany.sharepoint.com/.../embed?...",
  },
  {
    id: "basic-components",
    title: "Basic Elevator Components",
    description: "Walkthrough of the main mechanical and electrical components.",
    url: "https://yourcompany.sharepoint.com/sites/training/videos/basic-components",
  },
  {
    id: "installation-overview",
    title: "Installation Process Overview",
    description: "End-to-end overview of a standard installation project.",
    url: "https://yourcompany.sharepoint.com/sites/training/videos/installation-overview",
  },
  {
    id: "maintenance-basics",
    title: "Routine Maintenance Basics",
    description: "What to check on a standard maintenance visit, and why it matters.",
    url: "https://yourcompany.sharepoint.com/sites/training/videos/maintenance-basics",
  },
];

export const oldVideos: VideoItem[] = [
  {
    id: "legacy-hydraulics",
    title: "Legacy Hydraulic Systems",
    description: "Archive session covering older hydraulic elevator models.",
    url: "https://yourcompany.sharepoint.com/sites/training/videos/legacy-hydraulics",
  },
  {
    id: "old-control-panels",
    title: "Older Control Panel Standards",
    description: "Reference material for control panel designs used before 2015.",
    url: "https://yourcompany.sharepoint.com/sites/training/videos/old-control-panels",
  },
];
