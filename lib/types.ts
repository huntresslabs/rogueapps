export interface Permission {
  resource: string;
  permission: string;
  type: "Delegated" | "Application";
}

export interface RogueApp {
  // App specific data
  appId: string;
  appDisplayName: string;
  appOwnerOrganizationId: string;
  appPublisherName: string;
  appPublisherId: string;
  description: string;
  permissions: Permission[];
  tags: string[];
  references: string[];
  mitreTTP: string[];

  // Contributor data
  contributors: string[];
  dateAdded: string;
}