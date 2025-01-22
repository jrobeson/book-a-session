import { createContext, type ReactNode, useContext, useReducer } from 'react';

export type Session = {
	id: string;
	title: string;
	summary: string;
	description: string;
	duration: number;
	date: string;
	image: string;
};

type SessionsState = {
	sessions: Session[];
};

type BOOK_SESSION = {
	type: 'BOOK_SESSION';
	payload: Session;
};

type CANCEL_SESSION = {
	type: 'CANCEL_SESSION';
	payload: string;
};

type ActionTypes = BOOK_SESSION | CANCEL_SESSION;

type SessionContextValue = SessionsState & {
	bookSession(session: Session): void;
	cancelSession(id: string): void;
};

const initialState: SessionsState = {
	sessions: [],
};

const SessionsContext = createContext<SessionContextValue | null>(null);

export function useSessionsContext() {
	const sessionsCtx = useContext(SessionsContext);
	if (!sessionsCtx) {
		throw new Error('Sessions Context must be used within the context provider!');
	}
	return sessionsCtx;
}

function sessionReducer(state: SessionsState, action: ActionTypes) {
	switch (action.type) {
		case 'BOOK_SESSION': {
			if (state.sessions.some((session) => session.id === action.payload.id)) return state;
			const newSessionsArray = [...state.sessions, action.payload];
			return {
				sessions: newSessionsArray,
			};
		}
		case 'CANCEL_SESSION': {
			const newSessionArray = state.sessions.filter((session) => session.id !== action.payload);
			return { sessions: newSessionArray };
		}
		default:
			return state;
	}
}

export default function SessionsContextProvider({ children }: { children: ReactNode }) {
	const [sessionState, dispatch] = useReducer(sessionReducer, initialState);

	function bookSession(session: Session) {
		dispatch({ type: 'BOOK_SESSION', payload: session });
	}

	function cancelSession(id: string) {
		dispatch({ type: 'CANCEL_SESSION', payload: id });
	}
	const ctxValue: SessionContextValue = {
		sessions: sessionState.sessions,
		bookSession,
		cancelSession,
	};

	return <SessionsContext.Provider value={ctxValue}>{children}</SessionsContext.Provider>;
}
