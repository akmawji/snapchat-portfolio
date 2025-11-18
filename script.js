const chatMessages = document.getElementById('chatMessages');
const messageInput = document.getElementById('messageInput');
const headerName = document.querySelector('.header-name');
const headerAvatar = document.querySelector('.header-avatar');

// All conversations
const conversations = {
    recruiter: {
        name: 'Recruiter',
        avatar: '👔',
        messages: [
            {
                text: "Hi! 👋 I'm interested in applying for an internship position. Would it be possible to schedule an interview?",
                sender: 'sent',
                delay: 500
            },
            {
                text: "Can you tell me about your experience? 💼",
                sender: 'received',
                delay: 2000
            },
            {
                text: "I worked at Google on AI agents in chat 🤖, I am an incoming Shopify Infrastructure intern 🛒, I also worked at two AI startups, one in healthcare 🏥 and one in mining ⛏️",
                sender: 'sent',
                delay: 2500
            },
            {
                text: "Why Snap? 🤔",
                sender: 'received',
                delay: 2000
            },
            {
                text: "Because Snap has been my go-to app since I was 12 📱 and I love what they're doing with Spectacles! 😎✨",
                sender: 'sent',
                delay: 2000
            },
            {
                text: "Fine. I'll schedule an interview. 📅",
                sender: 'received',
                delay: 2000
            },
            {
                text: "Thank you so much! My email is karimmawji7@gmail.com. Looking forward to hearing from you! 🙏",
                sender: 'sent',
                delay: 2000
            }
        ]
    },
    shopify: {
        name: 'Shopify',
        avatar: '🛒',
        messages: [
            {
                text: "Hi! Just wanted to confirm the details for my Winter 2026 internship. I'll be joining as a Software Engineering Intern in Montreal, Quebec from January to April 2026.",
                sender: 'sent',
                delay: 500
            },
            {
                text: "Yes, that's correct. You'll be working on infrastructure projects. Have you reviewed the onboarding materials?",
                sender: 'received',
                delay: 2000
            },
            {
                text: "Yes, I've gone through them. I'm looking forward to working on scalable infrastructure systems. The experience from my previous internships at Google, Healthcare Systems, and the mining company should be helpful.",
                sender: 'sent',
                delay: 2500
            },
            {
                text: "Great. Your background in full-stack development, ML pipelines, and working with large codebases will be valuable here.",
                sender: 'received',
                delay: 2000
            },
            {
                text: "Thank you for the opportunity. I'll be ready to start in January.",
                sender: 'sent',
                delay: 2000
            },
            {
                text: "See you then!",
                sender: 'received',
                delay: 2000
            }
        ]
    },
    google: {
        name: 'Google',
        avatar: '🔍',
        messages: [
            {
                text: "Hi! Just wanted to follow up on the work I completed during my internship. I integrated Gemini AI into Google Chat to enhance multiplayer AI capabilities, which significantly boosted interactive collaboration, user engagement, and real-time responsiveness.",
                sender: 'sent',
                delay: 500
            },
            {
                text: "Yes, that project had great impact. What about the Export to Sheets feature?",
                sender: 'received',
                delay: 2000
            },
            {
                text: "I developed a full-stack 'Export to Sheets' feature for Gemini Chat Agents. Built a Java backend with Google Drive API integration to automate spreadsheet creation from chat data, which significantly improved user workflow.",
                sender: 'sent',
                delay: 2500
            },
            {
                text: "And the publish workflow changes?",
                sender: 'received',
                delay: 2000
            },
            {
                text: "I streamlined the chat publish workflow by creating backend logic and SQL database changes to read and write user preferences, eliminating a repetitive confirmation dialog. Also implemented a configure-settings feature for improved testing and user control.",
                sender: 'sent',
                delay: 2500
            },
            {
                text: "Your testing and documentation work was thorough.",
                sender: 'received',
                delay: 2000
            },
            {
                text: "I drove project success through comprehensive technical documentation, unit, integration, and screenshot testing to ensure reliability, quality and seamless functionality of all implemented features. Also maintained high productivity during the major platform migration by quickly adapting to new code bases and naming conventions.",
                sender: 'sent',
                delay: 2500
            },
            {
                text: "Thanks for the summary. Great work this summer.",
                sender: 'received',
                delay: 2000
            },
            {
                text: "Thank you for the opportunity! 🙏",
                sender: 'sent',
                delay: 2000
            }
        ]
    },
    healthcare: {
        name: 'Healthcare Systems',
        avatar: '🏥',
        messages: [
            {
                text: "Hi! Following up on the spine pain prediction model work. I added three layers to the existing neural network using metrics angular displacement, angular velocity and angular acceleration, which were found using 3D coordinates for 25 body landmarks to improve model accuracy.",
                sender: 'sent',
                delay: 500
            },
            {
                text: "Yes, that improved our accuracy significantly. What about the model architecture?",
                sender: 'received',
                delay: 2000
            },
            {
                text: "I built and optimized a deep learning model for spine pain prediction using TensorFlow and Keras. Integrated CNNs, GRU layers, and advanced data augmentation techniques like Random Flip and Zoom to enhance accuracy.",
                sender: 'sent',
                delay: 2500
            },
            {
                text: "And the model generalization?",
                sender: 'received',
                delay: 2000
            },
            {
                text: "I fine-tuned hyperparameters and implemented regularization techniques to improve model generalization. Also developed a desktop application with file upload for model deployment using React and Python.",
                sender: 'sent',
                delay: 2500
            },
            {
                text: "The desktop app made deployment much easier for our team. Thanks for all the work.",
                sender: 'received',
                delay: 2000
            },
            {
                text: "Thank you for the opportunity! 🙏",
                sender: 'sent',
                delay: 2000
            }
        ]
    },
    mining: {
        name: '1266407 B.C. LTD',
        avatar: '⛏️',
        messages: [
            {
                text: "Hi! Following up on the geological data analysis work. I processed missing data with neural networks using probabilistic modeling, which improved performance by 5%.",
                sender: 'sent',
                delay: 500
            },
            {
                text: "Yes, that improvement was significant. What about the ML pipeline?",
                sender: 'received',
                delay: 2000
            },
            {
                text: "I collaborated on developing a machine learning pipeline for geological data analysis alongside geological experts using Python, TensorFlow, XGBoost, and PyTorch.",
                sender: 'sent',
                delay: 2500
            },
            {
                text: "And the autoencoder work?",
                sender: 'received',
                delay: 2000
            },
            {
                text: "I trained an autoencoder neural network containing 61 features to compress and reconstruct geochemical data. Evaluated performance metrics including R² score, MAE, and MSE to refine predictive capabilities.",
                sender: 'sent',
                delay: 2500
            },
            {
                text: "The collaboration with our geological team worked well, especially remotely. Thanks for the work.",
                sender: 'received',
                delay: 2000
            },
            {
                text: "Thank you for the opportunity! 🙏",
                sender: 'sent',
                delay: 2000
            }
        ]
    }
};

let currentChat = 'recruiter';
let activeTimeouts = [];

function formatTime(date) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    const displayMinutes = minutes.toString().padStart(2, '0');
    return `${displayHours}:${displayMinutes} ${ampm}`;
}

function addMessage(text, sender, chatName) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    
    const senderName = document.createElement('div');
    senderName.className = 'sender-name';
    senderName.textContent = sender === 'sent' ? 'ME' : chatName.toUpperCase();
    
    const messageContent = document.createElement('div');
    messageContent.className = 'message-content';
    messageContent.textContent = text;
    
    messageDiv.appendChild(senderName);
    messageDiv.appendChild(messageContent);
    chatMessages.appendChild(messageDiv);
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function clearAllTimeouts() {
    activeTimeouts.forEach(timeoutId => clearTimeout(timeoutId));
    activeTimeouts = [];
}

function startConversation(chatId) {
    // Clear any pending timeouts from previous conversations
    clearAllTimeouts();
    
    // Clear messages immediately
    chatMessages.innerHTML = '';
    
    const conversation = conversations[chatId];
    if (!conversation) return;
    
    currentChat = chatId;
    headerName.textContent = conversation.name;
    headerAvatar.textContent = conversation.avatar;
    
    // Calculate cumulative delays and store timeout IDs
    let cumulativeDelay = 0;
    conversation.messages.forEach((msg, index) => {
        cumulativeDelay += msg.delay;
        const timeoutId = setTimeout(() => {
            // Double check we're still on the same chat
            if (currentChat === chatId) {
                addMessage(msg.text, msg.sender, conversation.name);
            }
        }, cumulativeDelay);
        activeTimeouts.push(timeoutId);
    });
}

// Function to close mobile sidebar
function closeMobileSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    if (sidebar) {
        sidebar.classList.remove('active');
    }
    if (sidebarOverlay) {
        sidebarOverlay.classList.remove('active');
    }
}

// Initialize mobile menu
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const sidebar = document.querySelector('.sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    
    if (!mobileMenuBtn || !sidebar || !sidebarOverlay) {
        return;
    }
    
    // Toggle sidebar on menu button click
    mobileMenuBtn.onclick = function(e) {
        e.preventDefault();
        e.stopPropagation();
        const isActive = sidebar.classList.contains('active');
        if (isActive) {
            closeMobileSidebar();
        } else {
            sidebar.classList.add('active');
            sidebarOverlay.classList.add('active');
        }
    };
    
    // Close sidebar when clicking overlay
    sidebarOverlay.onclick = function() {
        closeMobileSidebar();
    };
}

// Initialize mobile menu when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileMenu);
} else {
    initMobileMenu();
}

// Handle chat item clicks
document.querySelectorAll('.chat-item').forEach(item => {
    item.addEventListener('click', () => {
        // Remove active class from all items
        document.querySelectorAll('.chat-item').forEach(chat => chat.classList.remove('active'));
        // Add active class to clicked item
        item.classList.add('active');
        // Start the conversation
        const chatId = item.getAttribute('data-chat');
        startConversation(chatId);
        
        // Close sidebar on mobile after selecting a chat
        if (window.innerWidth <= 768) {
            closeMobileSidebar();
        }
    });
});

// Start the conversation when page loads
window.addEventListener('load', () => {
    startConversation('recruiter');
    
    // Handle story viewing
    const storyViewer = document.getElementById('storyViewer');
    const storyClose = document.getElementById('storyClose');
    
    if (storyViewer && storyClose) {
        document.querySelectorAll('.story-item[data-story]').forEach(item => {
            item.addEventListener('click', () => {
                storyViewer.classList.add('active');
            });
        });
        
        storyClose.addEventListener('click', () => {
            storyViewer.classList.remove('active');
        });
        
        // Close story viewer when clicking outside
        storyViewer.addEventListener('click', (e) => {
            if (e.target === storyViewer) {
                storyViewer.classList.remove('active');
            }
        });
    }
    
    // Initialize mobile menu on load as well
    initMobileMenu();
});

// Disable input functionality since this is just a demo
messageInput.addEventListener('keypress', (e) => {
    e.preventDefault();
});
