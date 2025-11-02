// First Aid Advice Data
const firstAidAdvice = {
    'menstrual-cramps': {
        title: 'Menstrual Cramps Relief',
        content: `
            <ol>
                <li>Apply a heating pad or warm compress to your lower abdomen.</li>
                <li>Take over-the-counter pain relievers like ibuprofen or acetaminophen.</li>
                <li>Rest and relax in a comfortable position.</li>
                <li>Stay hydrated and eat light, nutritious meals.</li>
                <li>Try gentle exercises like walking or yoga.</li>
                <li>If cramps are severe or persistent, consult a healthcare provider.</li>
            </ol>
        `,
        video: 'videos/Top_3_Ways_to_get_Immediate_Relief___Period_cramp___Period_Pain_Relief___Home_Remedies___Dr_Hansaji(360p).mp4'
    },
    'burn': {
        title: 'Burn Treatment',
        content: `
            <ol>
                <li>Cool the burn under cool (not cold) running water for 10-15 minutes.</li>
                <li>Remove any jewelry or clothing near the burn (unless stuck to the skin).</li>
                <li>Cover the burn with a clean, dry dressing.</li>
                <li>Do not apply creams, oils, or ice to the burn.</li>
                <li>Seek medical attention for severe burns or if the burn covers a large area.</li>
            </ol>
        `,
        video: 'videos/First_Aid_Skills__Burns(360p).mp4'
    },
    'scald': {
        title: 'Scald Treatment',
        content: `
            <ol>
                <li>Cool the affected area under cool running water for at least 20 minutes.</li>
                <li>Remove any wet clothing or jewelry from the area.</li>
                <li>Cover with a clean, dry dressing.</li>
                <li>Do not burst any blisters.</li>
                <li>Seek medical attention if the scald is severe or covers a large area.</li>
            </ol>
        `,
        video: 'videos/Burns_and_scalds__First_aid_steps_and_key_action(360p).mp4'
    },
    'asthma': {
        title: 'Asthma Attack Management',
        content: `
            <ol>
                <li>Help the person sit upright and stay calm.</li>
                <li>Assist them in using their inhaler if available.</li>
                <li>If no inhaler, help them breathe slowly and deeply.</li>
                <li>Loosen any tight clothing.</li>
                <li>Call emergency services if symptoms worsen or don't improve.</li>
            </ol>
        `,
        video: 'videos/Asthma_attack__First_aid_steps_and_key_action(360p).mp4'
    },
    'hypotension': {
        title: 'Low Blood Pressure (Hypotension) Management',
        content: `
            <ol>
                <li>Help the person lie down with feet elevated.</li>
                <li>Ensure they are in a comfortable position.</li>
                <li>Loosen any tight clothing.</li>
                <li>Offer small sips of water if conscious.</li>
                <li>Monitor breathing and consciousness.</li>
                <li>Seek medical attention if symptoms persist.</li>
            </ol>
        `,
        video: 'videos/Hypotension._How_to_quickly_raise_blood_pressure_at_home._First_aid(360p).mp4'
    },
    'diabetes': {
        title: 'Diabetic Emergency Response',
        content: `
            <ol>
                <li>Check if the person is conscious and responsive.</li>
                <li>If they have hypoglycemia symptoms, give them sugar (glucose tablets, juice, candy).</li>
                <li>If unconscious, do not give anything by mouth.</li>
                <li>Call emergency services immediately.</li>
                <li>Provide any available medical information (diabetes type, medications).</li>
            </ol>
        `,
        video: 'videos/First_aid_for_diabetic_emergencies___First_aid_training_online___British_Red_Cross(360p).mp4'
    },
    'cut': {
        title: 'Cut and Wound Treatment',
        content: `
            <ol>
                <li>Apply direct pressure to stop bleeding.</li>
                <li>Clean the wound with soap and water.</li>
                <li>Apply an antiseptic and cover with a clean dressing.</li>
                <li>Change dressing regularly and watch for signs of infection.</li>
                <li>Seek medical attention for deep cuts or if bleeding doesn't stop.</li>
            </ol>
        `,
        video: 'videos/Basic_first_aid_treatment_for_bleeding_cuts(360p).mp4'
    },
    'dog-bite': {
        title: 'Dog Bite First Aid',
        content: `
            <ol>
                <li>Clean the wound thoroughly with soap and water.</li>
                <li>Apply pressure to stop any bleeding.</li>
                <li>Cover with a clean dressing.</li>
                <li>Seek medical attention, especially for puncture wounds or if the dog is unknown/stray.</li>
                <li>Report the incident to local authorities if necessary.</li>
            </ol>
        `,
        video: 'videos/First_Aid_for_Dog_Bites(360p).mp4'
    },
    'choking': {
        title: 'Choking First Aid',
        content: `
            <ol>
                <li>Encourage the person to cough if they can.</li>
                <li>If coughing fails, perform the Heimlich maneuver: stand behind, wrap arms around waist, make a fist above navel, thrust inward and upward.</li>
                <li>For infants, use back blows and chest thrusts.</li>
                <li>Call emergency services if the object doesn't come out.</li>
                <li>Do not perform blind finger sweeps.</li>
            </ol>
        `,
        video: 'videos/What_to_do_if_Your_Baby_is_Choking_-_First_Aid_Training_-_St_John_Ambulance(360p).mp4'
    },
    'heart-attack': {
        title: 'Heart Attack First Aid',
        content: `
            <ol>
                <li>Call emergency services immediately.</li>
                <li>Help the person sit or lie down comfortably.</li>
                <li>Loosen tight clothing.</li>
                <li>If conscious, give aspirin if available and not allergic.</li>
                <li>Monitor breathing and be prepared to perform CPR if needed.</li>
            </ol>
        `,
        video: 'videos/First_Aid_Skills__Heart_Attack(360p).mp4'
    },
    'stroke': {
        title: 'Stroke First Aid',
        content: `
            <ol>
                <li>Recognize signs: sudden numbness, confusion, trouble speaking, vision issues, walking difficulties, severe headache.</li>
                <li>Note the time symptoms started.</li>
                <li>Call emergency services immediately.</li>
                <li>Keep the person comfortable and monitor for changes.</li>
                <li>Do not give food or drink if swallowing is affected.</li>
            </ol>
        `,
        video: 'videos/What_To_Do_If_Someone_Has_A_Stroke,_Signs___Symptoms_-_First_Aid_Training_-_St_John_Ambulance(360p).mp4'
    },
    'fracture': {
        title: 'Fracture First Aid',
        content: `
            <ol>
                <li>Immobilize the injured area with splints if possible.</li>
                <li>Apply ice packs to reduce swelling.</li>
                <li>Elevate the limb if no pain increases.</li>
                <li>Do not attempt to realign the bone.</li>
                <li>Seek immediate medical attention.</li>
            </ol>
        `,
        video: 'videos/How_To_Treat_A_Fracture___Fracture_Types_-_First_Aid_Training_-_St_John_Ambulance(360p).mp4'
    },
    'severe-bleeding': {
        title: 'Severe Bleeding First Aid',
        content: `
            <ol>
                <li>Apply direct pressure to the wound with a clean cloth.</li>
                <li>Elevate the injured area above heart level if possible.</li>
                <li>Use a tourniquet only as a last resort and note the time.</li>
                <li>Keep the person warm and call emergency services.</li>
                <li>Do not remove embedded objects.</li>
            </ol>
        `,
        video: 'videos/First_Aid_Skills__Severe_Bleeds(360p).mp4'
    },
    'allergic-reaction': {
        title: 'Severe Allergic Reaction (Anaphylaxis) First Aid',
        content: `
            <ol>
                <li>Call emergency services immediately.</li>
                <li>Help the person lie down with legs elevated if breathing is difficult.</li>
                <li>Use epinephrine auto-injector if available.</li>
                <li>Loosen tight clothing and monitor breathing.</li>
                <li>Perform CPR if the person stops breathing.</li>
            </ol>
        `,
        video: 'videos/Severe_allergic_reaction_and_anaphylaxis__first_aid_steps_and_key_action(360p).mp4'
    },
    'hypothermia': {
        title: 'Hypothermia First Aid',
        content: `
            <ol>
                <li>Move the person to a warm, dry place immediately.</li>
                <li>Remove wet clothing and replace with dry, warm layers.</li>
                <li>Cover the person with blankets or sleeping bags.</li>
                <li>Provide warm, non-alcoholic drinks if conscious.</li>
                <li>Use skin-to-skin contact if necessary.</li>
                <li>Seek medical attention; do not warm extremities first if severe.</li>
            </ol>
        `,
        video: 'videos/Helping_someone_who_has_hypothermia_FirstAid_PowerOfKindness(360p).mp4'
    }
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize first aid functionality
    if (document.querySelector('.emergency-grid')) {
        initFirstAid();
    }

    // Initialize modal functionality
    initModal();

    // Initialize ambulance alert functionality
    initAmbulanceAlert();
});

// First Aid Functions
function initFirstAid() {
    const cards = document.querySelectorAll('.emergency-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const emergency = card.dataset.emergency;
            showAdvice(emergency);
        });
    });
}

function showAdvice(emergency) {
    const adviceDisplay = document.getElementById('advice-display');
    const titleElement = document.getElementById('advice-title');
    const contentElement = document.getElementById('advice-content');
    const videoElement = document.getElementById('advice-video');

    titleElement.textContent = firstAidAdvice[emergency].title;
    contentElement.innerHTML = firstAidAdvice[emergency].content;
    videoElement.src = firstAidAdvice[emergency].video.replace(/#/g, '%23');

    adviceDisplay.style.display = 'block';
    adviceDisplay.scrollIntoView({ behavior: 'smooth' });
}

// Modal Functions
function initModal() {
    const modal = document.getElementById('doctor-modal');
    const btn = document.getElementById('report-doctor');
    const span = document.getElementsByClassName('close')[0];
    const form = document.getElementById('doctor-form');

    // When the user clicks the button, open the modal
    btn.addEventListener('click', function() {
        const emergencyType = document.getElementById('advice-title').textContent;
        document.getElementById('emergency-type').value = emergencyType;
        modal.style.display = 'block';
    });

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = 'none';
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    // Handle form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const doctorMobile = document.getElementById('doctor-mobile').value;
        const patientName = document.getElementById('patient-name').value;
        const emergencyType = document.getElementById('emergency-type').value;
        const message = document.getElementById('message').value;

        const smsBody = `First Aid Report: ${emergencyType}\nPatient Name: ${patientName}\n\nAdditional Message:\n${message}\n\nThis report was generated from the First Aid System.`;

        const smsLink = `sms:${doctorMobile}?body=${encodeURIComponent(smsBody)}`;

        window.location.href = smsLink;

        // Show notification
        alert('Report sent successfully! Please check your SMS app to confirm delivery.');

        // Close modal after sending
        modal.style.display = 'none';
        form.reset();
    });
}

// Ambulance Alert Function
function initAmbulanceAlert() {
    const alertBtn = document.getElementById('alert-ambulance');
    alertBtn.addEventListener('click', function() {
        const emergencyType = document.getElementById('advice-title').textContent;

        // Request user's location
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                const mapsLink = `https://www.google.com/maps?q=${lat},${lng}`;

                const message = `Emergency Alert: ${emergencyType}\n\nLocation: Lat: ${lat}, Lng: ${lng} - ${mapsLink}\n\nUrgent medical assistance required. Please respond immediately.`;

                // Assuming a generic emergency number; in real implementation, use local emergency number
                const emergencyNumber = '+256752802167'; // Local emergency number

                const smsLink = `sms:${emergencyNumber}?body=${encodeURIComponent(message)}`;

                window.location.href = smsLink;

                // Show notification
                alert('Emergency alert sent with your location! Ambulance is being dispatched. Please stay calm.');
            }, function(error) {
                console.error('Error getting location:', error);
                const message = `Emergency Alert: ${emergencyType}\n\nLocation: Unable to retrieve location. Please provide details.\n\nUrgent medical assistance required.`;

                const emergencyNumber = '+256752802167';
                const smsLink = `sms:${emergencyNumber}?body=${encodeURIComponent(message)}`;
                window.location.href = smsLink;

                // Show notification
                alert('Emergency alert sent! Location could not be retrieved. Please provide your location manually. Ambulance is being dispatched.');
            });
        } else {
            const message = `Emergency Alert: ${emergencyType}\n\nLocation: Geolocation not supported. Please provide details.\n\nUrgent medical assistance required.`;

            const emergencyNumber = '+256752802167';
            const smsLink = `sms:${emergencyNumber}?body=${encodeURIComponent(message)}`;

            window.location.href = smsLink;

            // Show notification
            alert('Emergency alert sent! Geolocation not supported. Please provide your location manually. Ambulance is being dispatched.');
        }
    });
}
