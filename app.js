// ==================== NAVIGATION ====================
function switchScreen(screen) {
    const titles = {
        dashboard: ['Dashboard', 'Overview of your lead performance'],
        listing: ['Lead Listing', 'View and manage all your leads'],
        management: ['Lead Pipeline', 'Drag leads through your sales pipeline'],
        details: ['Lead Details', 'Detailed view of lead information']
    };

    // Update sidebar nav
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    const sidebarItem = document.querySelector('.sidebar .nav-item[data-screen="' + screen + '"]');
    if (sidebarItem) sidebarItem.classList.add('active');

    // Update mobile nav
    document.querySelectorAll('.mobile-nav a').forEach(n => n.classList.remove('active'));
    const mobileItem = document.querySelector('.mobile-nav a[data-screen="' + screen + '"]');
    if (mobileItem) mobileItem.classList.add('active');

    // Switch screen
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('screen-' + screen).classList.add('active');

    // Update page title
    document.getElementById('pageTitle').textContent = titles[screen][0];
    document.getElementById('pageSubtitle').textContent = titles[screen][1];
}

// Sidebar nav clicks
document.querySelectorAll('.nav-item[data-screen]').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        switchScreen(item.dataset.screen);
    });
});

// Mobile nav clicks
document.querySelectorAll('.mobile-nav a[data-screen]').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        switchScreen(item.dataset.screen);
    });
});

// Show mobile nav on small screens
function checkMobileNav() {
    const mobileNav = document.querySelector('.mobile-nav');
    if (window.innerWidth <= 600) {
        mobileNav.style.display = 'flex';
    } else {
        mobileNav.style.display = 'none';
    }
}
window.addEventListener('resize', checkMobileNav);
checkMobileNav();

// Lead rows click -> navigate to details
document.querySelectorAll('.lead-row[data-screen]').forEach(row => {
    row.addEventListener('click', (e) => {
        if (e.target.closest('.icon-btn') || e.target.closest('input')) return;
        document.querySelector('.nav-item[data-screen="details"]').click();
    });
});

// ==================== CHARTS ====================
function initCharts() {
    // Lead Trends Chart
    const leadsCtx = document.getElementById('leadsChart');
    if (leadsCtx) {
        new Chart(leadsCtx, {
            type: 'line',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                    label: 'New Leads',
                    data: [45, 62, 38, 71, 55, 48, 67],
                    borderColor: '#4f6ef7',
                    backgroundColor: 'rgba(79, 110, 247, 0.08)',
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#4f6ef7',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 5
                }, {
                    label: 'Conversions',
                    data: [12, 18, 10, 22, 15, 13, 20],
                    borderColor: '#22c55e',
                    backgroundColor: 'rgba(34, 197, 94, 0.08)',
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#22c55e',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 5
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                aspectRatio: 2,
                plugins: {
                    legend: {
                        position: 'top',
                        align: 'end',
                        labels: { usePointStyle: true, pointStyle: 'circle', padding: 20, font: { size: 12, family: 'Inter' } }
                    }
                },
                scales: {
                    y: { beginAtZero: true, grid: { color: '#f1f5f9' }, ticks: { font: { size: 11, family: 'Inter' } } },
                    x: { grid: { display: false }, ticks: { font: { size: 11, family: 'Inter' } } }
                },
                interaction: { intersect: false, mode: 'index' }
            }
        });
    }

    // Sources Donut Chart
    const sourcesCtx = document.getElementById('sourcesChart');
    if (sourcesCtx) {
        new Chart(sourcesCtx, {
            type: 'doughnut',
            data: {
                labels: ['Facebook', 'Google Ads', 'Website', 'Twitter', 'Walk-in', 'Referral'],
                datasets: [{
                    data: [35, 25, 18, 8, 8, 6],
                    backgroundColor: ['#1877f2', '#ea4335', '#14b8a6', '#1da1f2', '#8b5cf6', '#22c55e'],
                    borderWidth: 0,
                    hoverOffset: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                aspectRatio: 1,
                cutout: '65%',
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: { usePointStyle: true, pointStyle: 'circle', padding: 12, font: { size: 11, family: 'Inter' } }
                    }
                }
            }
        });
    }
}

// Initialize charts when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCharts);
} else {
    initCharts();
}

// ==================== CHECKBOX BULK ACTIONS ====================
const selectAll = document.querySelector('thead input[type="checkbox"]');
if (selectAll) {
    selectAll.addEventListener('change', () => {
        const checked = selectAll.checked;
        document.querySelectorAll('tbody input[type="checkbox"]').forEach(cb => { cb.checked = checked; });
        document.querySelector('.bulk-actions').style.display = checked ? 'flex' : 'none';
    });
}

// ==================== CHIP TOGGLE ====================
document.querySelectorAll('.card-actions').forEach(group => {
    group.querySelectorAll('.chip').forEach(chip => {
        chip.addEventListener('click', () => {
            group.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
        });
    });
});

// ==================== ADD LEAD MODAL (Placeholder) ====================
const addLeadBtn = document.getElementById('addLeadBtn');
if (addLeadBtn) {
    addLeadBtn.addEventListener('click', () => {
        alert('Add Lead form would open here - fields: Name, Phone, Email, Source, Interested Vehicle, Budget, Notes');
    });
}
