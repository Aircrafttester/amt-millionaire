const questions = [
    {
        question: "What is the primary purpose of an aircraft landing gear shock strut?",
        answers: {
            A: "To support the aircraft during flight",
            B: "To absorb landing impact and provide a smooth ride",
            C: "To increase aerodynamic lift",
            D: "To reduce brake wear"
        },
        correct: "B"
    },
    {
        question: "What type of tire construction uses overlapping plies at alternating angles?",
        answers: {
            A: "Radial",
            B: "Bias-ply",
            C: "Tubeless",
            D: "Retread"
        },
        correct: "B"
    },
    {
        question: "What component prevents relative rotation between the piston and cylinder of a shock strut?",
        answers: {
            A: "Shimmy damper",
            B: "Torque link/scissor link",
            C: "Axle nut",
            D: "Drag brace"
        },
        correct: "B"
    },
    {
        question: "What is the usual gas used to service an oleo-pneumatic shock strut?",
        answers: {
            A: "Oxygen",
            B: "Compressed air",
            C: "Nitrogen",
            D: "Carbon dioxide"
        },
        correct: "C"
    },
    {
        question: "What is the main purpose of a shimmy damper on nose gear?",
        answers: {
            A: "To absorb landing loads",
            B: "To prevent rapid oscillation of the nose wheel",
            C: "To center the nose wheel in flight",
            D: "To lock the gear down"
        },
        correct: "B"
    },
    {
        question: "A tire showing excessive wear in the center of the tread most likely indicates:",
        answers: {
            A: "Underinflation",
            B: "Overinflation",
            C: "Normal wear",
            D: "Brake dragging"
        },
        correct: "B"
    },
    {
        question: "What is the purpose of fusible plugs installed in some wheels?",
        answers: {
            A: "To prevent wheel corrosion",
            B: "To vent tire pressure if overheated",
            C: "To balance the wheel",
            D: "To retain the bearing grease"
        },
        correct: "B"
    },
    {
        question: "When servicing a shock strut, the correct extension is normally checked:",
        answers: {
            A: "With the aircraft on jacks and gear retracted",
            B: "With the aircraft on the ground at normal loaded weight",
            C: "With the aircraft empty and chocked",
            D: "Only during annual inspection"
        },
        correct: "B"
    },
    {
        question: "What is the primary function of an anti-skid system?",
        answers: {
            A: "To increase brake pedal travel",
            B: "To prevent wheel lockup during braking",
            C: "To reduce brake temperature",
            D: "To automatically apply parking brake"
        },
        correct: "B"
    },
    {
        question: "A radial tire differs from a bias-ply tire mainly in:",
        answers: {
            A: "Tread pattern only",
            B: "Ply orientation and sidewall flexibility",
            C: "Use of tubes",
            D: "Bead material"
        },
        correct: "B"
    },
    {
        question: "What is the purpose of a gear downlock mechanism?",
        answers: {
            A: "To retract the gear",
            B: "To prevent gear from extending in flight",
            C: "To ensure the gear remains fully extended and locked for landing",
            D: "To reduce drag with gear extended"
        },
        correct: "C"
    },
    {
        question: "A brake system using a master cylinder and no power assist is typically called:",
        answers: {
            A: "Power brake system",
            B: "Boosted brake system",
            C: "Independent brake system",
            D: "Anti-skid brake system"
        },
        correct: "C"
    },
    {
        question: "What is the most common cause of spongy brake pedal feel?",
        answers: {
            A: "Overinflated tires",
            B: "Air in the brake lines",
            C: "Worn wheel bearings",
            D: "Cold brake discs"
        },
        correct: "B"
    },
    {
        question: "What is the purpose of a parking brake valve?",
        answers: {
            A: "To bleed the brakes",
            B: "To lock hydraulic pressure in the brake lines",
            C: "To cool the brakes",
            D: "To bypass the anti-skid system"
        },
        correct: "B"
    },
    {
        question: "When checking tire inflation, the most accurate reading is obtained:",
        answers: {
            A: "Immediately after landing",
            B: "After taxiing to the ramp",
            C: "When the tire is cool and the aircraft has been parked",
            D: "During high-speed taxi"
        },
        correct: "C"
    },
    {
        question: "What is the purpose of a drag brace (drag strut) in a retractable landing gear?",
        answers: {
            A: "To absorb vertical landing loads",
            B: "To prevent gear from folding rearward or forward under load",
            C: "To steer the nose wheel",
            D: "To support the brake assembly"
        },
        correct: "B"
    },
    {
        question: "A tire with cuts deep enough to expose the cord:",
        answers: {
            A: "May remain in service until next inspection",
            B: "Must be removed from service",
            C: "Can be repaired with sealant",
            D: "Is acceptable if pressure is correct"
        },
        correct: "B"
    },
    {
        question: "What is the main advantage of multiple-disc brakes on large aircraft?",
        answers: {
            A: "Lower tire wear",
            B: "Greater braking force in a compact space",
            C: "No need for hydraulic fluid",
            D: "Self-bleeding capability"
        },
        correct: "B"
    },
    {
        question: "What is the purpose of a gear squat (weight-on-wheels) switch?",
        answers: {
            A: "To indicate gear position in the cockpit",
            B: "To prevent gear retraction on the ground",
            C: "To lock the brakes during landing",
            D: "To control cabin pressurization"
        },
        correct: "B"
    },
    {
        question: "When servicing a tire, why is it important to use only approved lubricants on the beads?",
        answers: {
            A: "To prevent bead slippage and wheel damage",
            B: "To reduce brake temperature",
            C: "To increase tire pressure",
            D: "To improve tread wear"
        },
        correct: "A"
    },
    {
        question: "What is the primary purpose of a nosewheel centering cam or mechanism?",
        answers: {
            A: "To lock the wheel for towing",
            B: "To align the nosewheel for retraction",
            C: "To improve steering sensitivity",
            D: "To reduce tire wear"
        },
        correct: "B"
    },
    {
        question: "A landing gear warning horn typically sounds when:",
        answers: {
            A: "The gear is down and locked",
            B: "The gear is retracted in flight",
            C: "The throttle is retarded with gear not down and locked",
            D: "The parking brake is set"
        },
        correct: "C"
    },
    {
        question: "What is the purpose of a brake bleed procedure?",
        answers: {
            A: "To increase system pressure",
            B: "To remove air and ensure solid pedal feel",
            C: "To cool the brake fluid",
            D: "To adjust pedal travel"
        },
        correct: "B"
    },
    {
        question: "Which statement about tubeless aircraft tires is true?",
        answers: {
            A: "They cannot be used on transport aircraft",
            B: "They require inner tubes for high altitude",
            C: "They use the wheel rim to provide the air seal",
            D: "They are only used on nose wheels"
        },
        correct: "C"
    },
    {
        question: "What is the main function of a gear uplock?",
        answers: {
            A: "To hold the gear in the extended position",
            B: "To secure the gear in the retracted position",
            C: "To prevent overextension of the shock strut",
            D: "To lock the wheel for braking"
        },
        correct: "B"
    },
    {
        question: "A brake dragging condition is most likely caused by:",
        answers: {
            A: "Low tire pressure",
            B: "Weak return springs or misadjusted linkage",
            C: "Cold brake discs",
            D: "Overinflated tires"
        },
        correct: "B"
    },
    {
        question: "What is the purpose of a gear door sequence valve?",
        answers: {
            A: "To control brake pressure",
            B: "To ensure doors open/close in proper order with gear movement",
            C: "To lock the gear down",
            D: "To vent hydraulic fluid"
        },
        correct: "B"
    },
    {
        question: "What is indicated by cupping or scalloping wear on a tire?",
        answers: {
            A: "Normal wear",
            B: "Underinflation only",
            C: "Out-of-balance or misaligned wheel",
            D: "Overinflation only"
        },
        correct: "C"
    },
    {
        question: "What is the primary reason for using nitrogen instead of air in aircraft tires?",
        answers: {
            A: "Nitrogen is cheaper",
            B: "Nitrogen is lighter than air",
            C: "Nitrogen is dry and non-reactive, reducing corrosion and pressure variation",
            D: "Nitrogen increases tire traction"
        },
        correct: "C"
    },
    {
        question: "When jacking an aircraft to check landing gear retraction, one important safety step is to:",
        answers: {
            A: "Deflate all tires",
            B: "Install gear safety pins or ensure area is clear before retracting",
            C: "Lock the brakes fully on",
            D: "Remove all hydraulic fuses"
        },
        correct: "B"
    }
];
