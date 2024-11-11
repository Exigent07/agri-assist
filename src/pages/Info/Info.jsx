import './Info.css';
import { useRef, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

function Info({ callback }) {
    const [countdown, setCountdown] = useState(10);
    const countdownRef = useRef(null);
    const assistActivated = useRef(false);

    function handleAcceptDecline(event) {
        const current = event.currentTarget;
        const currentType = current.dataset.type;

        if (assistActivated.current) return;

        assistActivated.current = true;

        if (currentType === "accept") {
            activateAssist();
        } else {
            declineAssist();
        }
    }

    function activateAssist() {
        toast.error("The feature is still under development, sorry for the inconvenience");
        callback();
    }

    function declineAssist() {
        toast.success("Continuing to the home page.");
        callback();
    }

    useEffect(() => {
        countdownRef.current = setInterval(() => {
            setCountdown(prevCountdown => {
                if (prevCountdown > 0) {
                    return prevCountdown - 1;
                } else {
                    clearInterval(countdownRef.current);
                    if (!assistActivated.current) {
                        assistActivated.current = true;
                        activateAssist();
                    }
                    return 0;
                }
            });
        }, 1000);

        return () => clearInterval(countdownRef.current);
    }, [callback]);

    return (
        <div className='Info'>
            <h2 className='assist-head'>Do you need voice assist?</h2>
            <div className='assist-btns'>
                <button data-type='accept' onClick={handleAcceptDecline} className='assist-yes'>Yes</button>
                <button data-type='decline' onClick={handleAcceptDecline} className='assist-no'>No</button>
            </div>
            <p className='assist-para'>Activating voice assist in</p>
            <div className='count-down'>{countdown}</div>
        </div>
    );
}

export default Info;
