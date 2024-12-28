import { launchExampleSingleton } from './singleton';
import { launchExampleObserver } from './observer';
import { launchExampleAdapter } from './adapter';

export default function launchPatterns() {
    launchExampleSingleton();
    launchExampleObserver();
    launchExampleAdapter();
}
