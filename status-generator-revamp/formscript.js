// Status Pages Lookup
const STATUS_PAGES = {
    board: { name: "Board Status Page", url: "https://it.status.selfdesign.org/status/board" },
    comms: { name: "Comms Status Page", url: "https://it.status.selfdesign.org/status/comms" },
    finance: { name: "Finance Status Page", url: "https://it.status.selfdesign.org/status/finance" },
    external: { name: "External Status Page", url: "https://it.status.selfdesign.org/status/external" },
    hr: { name: "HR Status Page", url: "https://it.status.selfdesign.org/status/hr" },
    operations: { name: "Operations Status Page", url: "https://it.status.selfdesign.org/status/operations" },
    procurement: { name: "Procurement Status Page", url: "https://it.status.selfdesign.org/status/procurement" },
    it: { name: "IT Status Page", url: "https://it.status.selfdesign.org/status/it" },
    educators: { name: "Educators Status Page", url: "https://it.status.selfdesign.org/status/educators" },
    faculty: { name: "Faculty Status Page", url: "https://it.status.selfdesign.org/status/faculty" },
    leadership: { name: "Leadership Status Page", url: "https://it.status.selfdesign.org/status/leadership" },
    parents: { name: "Parents & Learners Status Page", url: "https://it.status.selfdesign.org/status/parentlearner" },
    hln: { name: "HLN Status Page", url: "https://it.status.selfdesign.org/status/hln" },
    default: { name: "Default Status Page", url: "https://it.status.selfdesign.org/status/default" }
};

// Monitor to Status Pages Mapping
const MONITOR_STATUS_PAGES = {
    "Assets": ["operations", "educators", "faculty"],
    "Assets SDLC": ["hr", "educators"],
    "Call": ["board", "comms", "external", "hr", "operations", "procurement", "it", "educators", "faculty"],
    "Connect": ["board", "comms", "finance", "external", "hr", "operations", "procurement", "it", "educators", "faculty", "leadership", "hln"],
    "Discuss": ["board", "comms", "finance", "external", "hr", "operations", "procurement", "it", "educators", "faculty", "leadership"],
    "Draw": ["board", "comms", "finance", "external", "hr", "operations", "procurement", "it", "educators", "faculty", "leadership", "hln"],
    "Educator App": ["hr", "educators", "faculty", "leadership"],
    "Educator Matching": ["hr", "educators", "faculty", "leadership", "parents"],
    "Educator Tools": ["board", "operations", "it", "educators", "faculty", "leadership"],
    "Enrolment": ["hr", "educators", "faculty", "leadership", "parents", "hln"],
    "Files": ["board", "comms", "finance", "external", "hr", "operations", "procurement", "it", "educators", "faculty", "leadership", "hln"],
    "Fusion Directory": ["hr", "educators"],
    "Git": ["board", "comms", "finance", "external", "hr", "operations", "procurement", "it", "educators", "faculty", "leadership", "hln"],
    "Google Drive": ["board", "comms", "finance", "external", "hr", "operations", "procurement", "it", "educators", "faculty", "leadership", "parents"],
    "Invoices": ["board", "comms", "finance", "external", "hr", "operations", "procurement", "it", "educators", "faculty", "leadership"],
    "Learning Platform": ["hr", "operations", "it", "educators", "faculty", "leadership", "parents", "hln"],
    "Lists": ["board", "operations", "it", "educators", "faculty", "leadership"],
    "Lists Generator": ["board", "operations", "it", "educators", "faculty", "leadership"],
    "Onboarding": ["board", "comms", "finance", "external", "hr", "operations", "procurement", "it", "educators", "faculty", "leadership", "hln"],
    "Portal": ["board", "comms", "finance", "external", "hr", "operations", "procurement", "it", "educators", "faculty", "leadership", "parents", "hln"],
    "Procurement App": ["finance", "hr", "operations", "procurement", "it", "educators", "faculty", "leadership"],
    "Records": ["hr", "operations", "it", "educators", "faculty", "leadership"],
    "SharedInbox HLN": ["hr", "educators", "hln"],
    "SharedInbox SDLC": ["hr", "educators", "faculty", "leadership"],
    "Sharedinbox SDLF": ["board", "comms", "finance", "external", "hr", "operations", "procurement", "it", "educators", "faculty", "leadership"],
    "Spaces": ["board", "comms", "finance", "external", "hr", "operations", "procurement", "it", "educators", "faculty", "leadership", "hln"],
    "Surveys": ["board", "hr", "operations", "leadership"],
    "Talk": ["board", "comms", "finance", "external", "hr", "operations", "procurement", "it", "educators", "faculty", "leadership", "hln"],
    "Vault": ["board", "comms", "finance", "external", "hr", "operations", "procurement", "it", "educators", "faculty", "leadership", "hln"],
    "Zoom": ["board", "comms", "finance", "external", "hr", "operations", "procurement", "it", "educators", "faculty", "leadership", "parents", "hln"],
    "Bulletin": ["board", "comms", "finance", "external", "hr", "operations", "procurement", "it", "educators", "faculty", "leadership"],
    "Forms": ["board", "comms", "finance", "external", "hr", "operations", "procurement", "it", "educators", "faculty", "leadership"],
    "Home Learner's Network": ["board", "comms", "finance", "external", "hr", "operations", "procurement", "it", "educators", "faculty", "leadership", "parents", "hln"],
    "Library": ["hr", "operations", "it", "educators", "faculty", "leadership", "parents"],
    "Org Updates": ["board", "comms", "finance", "external", "hr", "operations", "procurement", "it", "educators", "faculty", "leadership"],
    "Organizational Website": ["board", "comms", "finance", "external", "hr", "operations", "procurement", "it", "educators", "faculty", "leadership", "parents", "hln", "default"],
    "Policies": ["board", "comms", "finance", "external", "hr", "operations", "procurement", "it", "educators", "faculty", "leadership", "parents", "hln", "default"],
    "Support Help Desk": ["board", "comms", "finance", "external", "hr", "operations", "procurement", "it", "educators", "faculty", "leadership", "parents", "hln", "default"],
    "Store": ["finance", "hr", "operations", "it", "leadership"]
};

// Populate monitor checkboxes on page load
// This creates the checkboxes for the monitors in HTML
function populateMonitorCheckboxes() {
    const monitorContainer = document.getElementById('monitor-selection');
    if (!monitorContainer) return;
    
    monitorContainer.innerHTML = '';
    
    Object.keys(MONITOR_STATUS_PAGES).forEach(monitorName => {
        const checkboxDiv = document.createElement('div');
        checkboxDiv.className = 'monitor-checkbox';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `monitor-${monitorName.replace(/\s+/g, '-').toLowerCase()}`;
        checkbox.name = 'affected-monitors';
        checkbox.value = monitorName;
        
        const label = document.createElement('label');
        label.htmlFor = checkbox.id;
        label.textContent = monitorName;
        
        checkboxDiv.appendChild(checkbox);
        checkboxDiv.appendChild(label);
        monitorContainer.appendChild(checkboxDiv);
    });
}

// Get selected monitors
function getSelectedMonitors() {
    const checkboxes = document.querySelectorAll('input[name="affected-monitors"]:checked');
    return Array.from(checkboxes).map(cb => cb.value);
}

// Get unique status pages for selected monitors
function getRelevantStatusPages(selectedMonitors) {
    const pageMap = new Map();
    
    selectedMonitors.forEach(monitor => {
        const pageKeys = MONITOR_STATUS_PAGES[monitor] || [];
        pageKeys.forEach(key => {
            const page = STATUS_PAGES[key];
            if (page) {
                pageMap.set(page.url, page);
            }
        });
    });

    return Array.from(pageMap.values());
}

// Search functionality for monitors
function setupMonitorSearch() {
    const searchInput = document.getElementById('monitor-search');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const monitorCheckboxes = document.querySelectorAll('.monitor-checkbox');
        
        monitorCheckboxes.forEach(checkbox => {
            const label = checkbox.querySelector('label');
            if (label) {
                const monitorName = label.textContent.toLowerCase();
                if (monitorName.includes(searchTerm)) {
                    checkbox.style.display = 'flex';
                } else {
                    checkbox.style.display = 'none';
                }
            }
        });
    });
}

// Update status pages display
function updateStatusPagesDisplay() {
    const selectedMonitors = getSelectedMonitors();
    const relevantPages = getRelevantStatusPages(selectedMonitors);
    const statusPagesContainer = document.getElementById('status-pages-container');
    const statusPagesList = document.getElementById('status-pages-list');
    
    if (relevantPages.length > 0) {
        statusPagesList.innerHTML = '';
        relevantPages.forEach(page => {
            const link = document.createElement('a');
            link.href = page.url;
            link.textContent = page.name;
            link.target = '_blank';
            link.className = 'status-page-link';
            
            const linkDiv = document.createElement('div');
            linkDiv.appendChild(link);
            statusPagesList.appendChild(linkDiv);
        });
        statusPagesContainer.style.display = 'block';
    } else {
        statusPagesContainer.style.display = 'none';
    }
}

// Initialize monitor checkboxes when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    populateMonitorCheckboxes();
    setupMonitorSearch();
    
    // Add change listeners to monitor checkboxes
    document.addEventListener('change', function(e) {
        if (e.target.name === 'affected-monitors') {
            updateStatusPagesDisplay();
        }
    });
});

document.getElementById('status-form').addEventListener('submit', function(event) {
    event.preventDefault();

    function reformatDates(date) {
        date = date.replace('T', ' ');
        return date;
    }

    function getCurrentDateISO() {
        const now = new Date();
        const vancouverTime = new Date(now.getTime() - (7 * 60 * 60 * 1000));
        const isoDate = vancouverTime.toISOString().replace('T', ' ').slice(0, -5);
        return isoDate;
    }

    function getChecked(name) {
        const checkboxes = document.querySelector(`input[name="${name}"]:checked`);
        return checkboxes ? checkboxes.value : null;
    }

    const statusStatus = getChecked('status-status');
    const detailsState = getChecked('status-details');
    const affectedServices = getChecked('status-affected-services');
    const selectedMonitors = getSelectedMonitors();
    const formattedDateTime = getCurrentDateISO();
    const formattedMaintenanceDateTime = reformatDates(document.getElementById('status-maintenance-date-time').value)

    // data object instead of relying on array indexes
    const statusData = {
        title: document.getElementById('status-title').value,
        status: statusStatus,
        timestamp: formattedDateTime,
        summary: document.getElementById('status-summary').value,
        description: document.getElementById('status-description').value,
        details: detailsState,
        affectedServices: affectedServices, // 'yes' | 'no'
        selectedMonitors: selectedMonitors, // array of monitor names
        maintenance: {
            scheduled: formattedMaintenanceDateTime,
            durationHours: document.getElementById('status-maintenance-duration').value
        }
    };
    console.log(statusData);

    function chooseTemplate(data) {
        let chosenTemplate = ``;
        const isMaintenance = data.status === 'maintenance';
        const isAffected = data.affectedServices === 'yes';

        // Templates
        const affectedServicesMaintenanceTemplate =
            `<!--Start of Issue-->
<div class="status-card bg-${data.status}">
<h3 class="status-title">${data.title}</h3>
<details ${data.details}>
<summary>${data.summary}</summary>
<p>${data.description}</p>
<strong>Affected Services:</strong>
<div><ul>
<li>Service Name 1</li>
<li>Service Name 2</li>
<li>Service Name 3</li>
</ul></div>
</details>
<div class="status-schedule"><strong>Scheduled:</strong> ${data.maintenance.scheduled} PST</div>
<div class="status-schedule"><strong>Duration:</strong> ${data.maintenance.durationHours} Hours</div>
<div class="status-ts"> ${data.timestamp}</div>
</div>
<!--End of Issue-->`;

        const noAffectedServicesMaintenanceTemplate =
            `<!--Start of Issue-->
<div class="status-card bg-${data.status}">
<h3 class="status-title">${data.title}</h3>
<details ${data.details}>
<summary>${data.summary}</summary>
<p>${data.description}</p>
</details>
<div class="status-schedule"><strong>Scheduled:</strong> ${data.maintenance.scheduled} PST</div>
<div class="status-schedule"><strong>Duration:</strong> ${data.maintenance.durationHours} Hours</div>
<div class="status-ts"> ${data.timestamp}</div>
</div>
<!--End of Issue-->`;

        const affectedServicesIncidentTemplate =
            `<!--Start of Issue-->
<div class="status-card bg-${data.status}">
<h3 class="status-title">${data.title}</h3>
<details ${data.details}>
<summary>${data.summary}</summary>
<p>${data.description}</p>
<strong>Affected Services:</strong>
<div><ul>
<li>Service Name 1</li>
<li>Service Name 2</li>
<li>Service Name 3</li>
</ul></div>
</details>
<div class="status-ts"> ${data.timestamp}</div>
</div>
<!--End of Issue-->`;

        const noAffectedServicesIncidentTemplate =
            `<!--Start of Issue-->
<div class="status-card bg-${data.status}">
<h3 class="status-title">${data.title}</h3>
<details ${data.details}>
<summary>${data.summary}</summary>
<p>${data.description}</p>
</details>
<div class="status-ts"> ${data.timestamp}</div>
</div>
<!--End of Issue-->`;

        if (!data.status || !data.affectedServices) {
            console.warn('Missing required status or affectedServices');
        } else if (isMaintenance && isAffected) {
            chosenTemplate = affectedServicesMaintenanceTemplate;
        } else if (isMaintenance && !isAffected) {
            chosenTemplate = noAffectedServicesMaintenanceTemplate;
        } else if (!isMaintenance && isAffected) {
            chosenTemplate = affectedServicesIncidentTemplate;
        } else if (!isMaintenance && !isAffected) {
            chosenTemplate = noAffectedServicesIncidentTemplate;
        }
        return chosenTemplate;
    }

    let postTemplate = chooseTemplate(statusData)

    const result = document.getElementById('result');
    const resultContainer = document.getElementById('result-container');
    result.value = postTemplate;
    resultContainer.style.display = "block";
    
    // update status pages display
    updateStatusPagesDisplay();
});

// templates with fills for summary and description
const STATUS_TEMPLATES = {
    operational_ok: {
        summary: 'All systems operational',
        description: 'All systems are operating normally. We will continue to monitor performance.'
    },
    investigating_incident: {
        summary: 'Investigating service disruption',
        description: 'We are investigating reports of a service disruption impacting some users. Further updates will be provided as we learn more.'
    },
    degraded_performance: {
        summary: 'Degraded performance',
        description: 'Users may experience slow responses or intermittent errors. Our team is working to restore normal performance.'
    },
    scheduled_maintenance: {
        summary: 'Scheduled maintenance',
        description: 'We will perform scheduled maintenance during the specified window. Some services may be unavailable for portions of this time.'
    },
    maintenance_completed: {
        summary: 'Maintenance completed',
        description: 'Scheduled maintenance has been completed successfully. Systems are operating as expected.'
    },
    incident_resolved: {
        summary: 'Incident resolved',
        description: 'The incident has been resolved. We will continue monitoring to ensure stability.'
    }
};

// wire up template dropdowns to auto-fill fields
(function attachTemplateHandlers() {
    const summarySelect = document.getElementById('summary-template');
    const descSelect = document.getElementById('description-template');
    const summaryInput = document.getElementById('status-summary');
    const descInput = document.getElementById('status-description');

    if (summarySelect && summaryInput) {
        summarySelect.addEventListener('change', function() {
            const key = this.value;
            if (!key) return;
            const t = STATUS_TEMPLATES[key];
            if (t && t.summary) summaryInput.value = t.summary;
        });
    }

    if (descSelect && descInput) {
        descSelect.addEventListener('change', function() {
            const key = this.value;
            if (!key) return;
            const t = STATUS_TEMPLATES[key];
            if (t && t.description) descInput.value = t.description;
        });
    }
})();
