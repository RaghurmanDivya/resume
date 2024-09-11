document.addEventListener('DOMContentLoaded', function() {
    const addSkillBtn = document.getElementById('add-skill-btn');
    const skillOptions = document.getElementById('skill-options');
    const customSkillSection = document.getElementById('custom-skill-section');
    const customSkillInput = document.getElementById('custom-skill-input');
    const addCustomSkillBtn = document.getElementById('add-custom-skill-btn');
    const cancelCustomSkillBtn = document.getElementById('cancel-custom-skill-btn');
    const selectedSkills = document.getElementById('selected-skills');

    function addSkill(skill) {
        const skillSpan = document.createElement('span');
        skillSpan.textContent = skill;
        skillSpan.addEventListener('click', () => {
            skillSpan.remove();
        });
        selectedSkills.appendChild(skillSpan);
    }

    skillOptions.querySelectorAll('.skill-option').forEach(option => {
        option.addEventListener('click', () => {
            addSkill(option.textContent);
        });
    });

    addSkillBtn.addEventListener('click', () => {
        skillOptions.style.display = 'none';
        customSkillSection.style.display = 'block';
    });

    addCustomSkillBtn.addEventListener('click', () => {
        const customSkill = customSkillInput.value.trim();
        if (customSkill) {
            addSkill(customSkill);
            customSkillInput.value = '';
            customSkillSection.style.display = 'none';
            skillOptions.style.display = 'flex';
        }
    });

    cancelCustomSkillBtn.addEventListener('click', () => {
        customSkillInput.value = '';
        customSkillSection.style.display = 'none';
        skillOptions.style.display = 'flex';
    });
});
