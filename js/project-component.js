

new Vue({
    el: '#portfolio-inner',    
    data: {
        showSingle: false,
        projects: [],
        singleProject: {}
    },
    methods: {
        displaySingleProject: function(event) {
            event.preventDefault();
            
            this.singleProject = this.projects.find(p => p.id === event.target.id);
            
            this.toggleSingleProject();
        },
        toggleSingleProject: function() {
            this.showSingle = !this.showSingle;
        }
        
    },
    mounted () {
        $.getJSON('./_in-memory-db/projects.json', data => {
            this.projects = data;
        })
    }

})